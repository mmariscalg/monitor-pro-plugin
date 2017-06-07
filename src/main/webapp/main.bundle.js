webpackJsonp([0,3],{

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configService__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_jobsGroup_model__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobs_basic_view_jobsBasicView_model__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JenkinsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JenkinsService = (function () {
    function JenkinsService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({});
        this.jobsGroupsFinded = {};
        this.jobsGroupsNamesList = [];
    }
    /**
     * Configures headers to invoke the server
     * @param authentication
     */
    JenkinsService.prototype.configHeaders = function (authentication) {
        if (authentication) {
            console.log("With authentication");
            //this.headers.append("Access-Control-Allow-Credentials", "true");
            this.headers.append("Authorization", "Basic " + btoa(this.configService.getUser() + ":" + this.configService.getPass()));
        }
        this.headers.append("Content-Type", "application/json");
        this.resquestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
        });
    };
    /**
     * Retrieves the exists views in Jenkins
     * @param urlJenkins
     * @returns {Observable<R>}
     */
    JenkinsService.prototype.getViews = function (urlJenkins) {
        var invokeUrl = (urlJenkins !== null && urlJenkins !== undefined) ? urlJenkins : this.configService.getJenkinsUrl();
        invokeUrl = invokeUrl + JenkinsService.endViewsUrl;
        this.configHeaders((urlJenkins === null || urlJenkins === undefined));
        return this.http.post(invokeUrl, undefined, this.resquestOptions)
            .map(function (response) { return response.json(); });
    };
    JenkinsService.prototype.transformToJovViews = function (response) {
        var jobViews = [];
        for (var _i = 0, _a = response.json().views; _i < _a.length; _i++) {
            var view = _a[_i];
            jobViews.push(new __WEBPACK_IMPORTED_MODULE_6__jobs_basic_view_jobsBasicView_model__["a" /* JobsBasicViewModel */](view.url, view.name));
        }
        return jobViews;
    };
    /**
     * Starts retrieving and formatting process of the Jobs State Data.
     * @param urlFolderOfJobs
     * @returns {Observable<R>}
     */
    JenkinsService.prototype.getJobsStatus = function (urlFolderOfJobs) {
        var _this = this;
        this.jobsGroupsFinded = {};
        this.jobsGroupsNamesList = [];
        if (urlFolderOfJobs === undefined) {
            this.invokedUrl = this.configService.getJenkinsUrl() + JenkinsService.endJobsDataUrl;
        }
        else {
            this.invokedUrl = urlFolderOfJobs + JenkinsService.endJobsDataUrl;
        }
        return this.http.post(this.invokedUrl, undefined, this.resquestOptions)
            .map(function (response) { return _this.createJobData(response.json().jobs); });
    };
    /**
     * Converts backend Jobs Objects in to frontend Jobs Objects
     * @param jobs
     */
    JenkinsService.prototype.createJobData = function (jobs) {
        var jobModelAux = [];
        for (var _i = 0, jobs_1 = jobs; _i < jobs_1.length; _i++) {
            var job = jobs_1[_i];
            if (job !== null) {
                if (job.buildable === undefined) {
                    this.getJobsStatus(job.url);
                }
                else {
                    if (job.lastBuild !== null) {
                        this.addJobToAGroup(job);
                    }
                }
            }
        }
        for (var _a = 0, _b = this.jobsGroupsNamesList; _a < _b.length; _a++) {
            var group = _b[_a];
            if (group === "reminder" || this.jobsGroupsFinded[group].length === 0) {
                for (var _c = 0, _d = this.jobsGroupsFinded[group]; _c < _d.length; _c++) {
                    var job = _d[_c];
                    var jobModel = new __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__["a" /* SimpleJob */](job);
                    jobModel.setStatusClass();
                    jobModelAux.push((jobModel));
                }
            }
            else {
                var principalJobModel = new __WEBPACK_IMPORTED_MODULE_4__job_jobsGroup_model__["a" /* JobsGroup */]();
                principalJobModel.name = group;
                for (var _e = 0, _f = this.jobsGroupsFinded[group]; _e < _f.length; _e++) {
                    var job = _f[_e];
                    var jobModel = new __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__["a" /* SimpleJob */](job);
                    jobModel.setStatusClass();
                    if (jobModel.result !== "SUCCESS") {
                        principalJobModel.result = jobModel.result;
                        console.log("RESULTADO GROUP JOB" + principalJobModel.result);
                    }
                    principalJobModel.jobsList.push(jobModel);
                }
                principalJobModel.setStatusClass();
                jobModelAux.push((principalJobModel));
            }
        }
        return jobModelAux;
    };
    /**
     * Adds the job to the correct group, according to a job's parameter.
     * @param job
     */
    JenkinsService.prototype.addJobToAGroup = function (job) {
        for (var _i = 0, _a = job.lastBuild.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            if (action._class === undefined || action._class === 'hudson.model.ParametersAction') {
                if (action.parameters !== undefined) {
                    for (var i = 0; i < action.parameters.length; i++) {
                        if (action.parameters[i].name === 'Jobs_Group') {
                            if (this.jobsGroupsFinded[action.parameters[i].value] !== undefined) {
                                this.jobsGroupsFinded[action.parameters[i].value].push(job);
                            }
                            else {
                                this.jobsGroupsNamesList.push(action.parameters[i].value);
                                this.jobsGroupsFinded[action.parameters[i].value] = [job];
                            }
                            break;
                        }
                        else {
                            if (i === action.parameters.length - 1) {
                                if (this.jobsGroupsFinded["reminder"] !== undefined) {
                                    this.jobsGroupsFinded["reminder"].push(job);
                                }
                                else {
                                    this.jobsGroupsNamesList.push("reminder");
                                    this.jobsGroupsFinded["reminder"] = [job
                                    ];
                                }
                            }
                        }
                    }
                }
                else {
                    if (this.jobsGroupsFinded["reminder"] !== undefined) {
                        this.jobsGroupsFinded["reminder"].push(job);
                    }
                    else {
                        this.jobsGroupsNamesList.push("reminder");
                        this.jobsGroupsFinded["reminder"] = [job];
                    }
                }
                break;
            }
        }
    };
    JenkinsService.prototype.submitForm = function () {
        console.log("Sends form to the Server");
        this.http.post("http://localhost:8080/jenkins/monitor-pro/prove", undefined, undefined);
    };
    JenkinsService.endJobsDataUrl = "api/json?tree=jobs[name,url,buildable,lastBuild[*,actions[parameters[*]]]]";
    JenkinsService.endViewsUrl = "api/json?tree=views[url,name],primaryView[url,name]";
    JenkinsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__configService__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__configService__["a" /* ConfigService */]) === 'function' && _b) || Object])
    ], JenkinsService);
    return JenkinsService;
    var _a, _b;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/jenkinsService.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
/**
 * Created by frdiaz on 30/12/2016.
 */
var Job = (function () {
    function Job() {
        this.statusClass = "basic project widget unknown";
    }
    Object.defineProperty(Job.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Changes the value of the statusClass attribute to set the Job's style class
     */
    Job.prototype.setStatusClass = function () {
        switch (this.result) {
            case "SUCCESS":
                this.statusClass = "successful";
                break;
            case "FAILURE":
                this.statusClass = "failing";
                break;
            case "UNSTABLE":
                this.statusClass = "unstable";
                break;
            case "ABORTED":
                this.statusClass = "aborted";
                break;
            case "DISABLED":
                this.statusClass = "disabled";
                break;
            default:
                this.statusClass = "unknown";
        }
    };
    /**
     * Returns a map with the jobs's styles classes
     * @returns {{basic: boolean, project: boolean, widget: boolean, unknown: boolean, failing: boolean, successful: boolean, unstable: boolean, aborted: boolean, disabled: boolean}}
     */
    Job.prototype.getClasses = function () {
        return {
            basic: true,
            project: true,
            widget: true,
            unknown: this.statusClass === "unknown",
            failing: this.statusClass === "failing",
            successful: this.statusClass === "successful",
            unstable: this.statusClass === "unstable",
            aborted: this.statusClass === "aborted",
            disabled: this.statusClass === "disabled"
        };
    };
    return Job;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/job.model.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(elm) {
        this.title = 'Monitor Pro v0.1';
        this.urlJenkins = "http://localhost:8080/"; //by default
        this.urlJenkins = elm.nativeElement.getAttribute("urlJenkins");
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(682),
            styles: [__webpack_require__(379)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/app.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configModel__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by frdiaz on 07/01/2017.
 */
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
        //this.configModel = new ConfigModel();
    }
    /**
     * Load security configuration data from file
     * @returns {Promise<T>}
     */
    ConfigService.prototype.load = function () {
        var _this = this;
        console.log(window.location.toString());
        var rootUrl = window.location.pathname;
        return new Promise(function (resolve, reject) {
            _this.http.get(rootUrl + 'assets/securityConfig.json')
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                console.log("Deployed as plugin.");
                resolve();
            })
                .subscribe(function (data) {
                //Application run as standalone app
                _this.fillConfigModel(data);
                resolve();
            });
        });
    };
    /**removeMonitorProFromPath(){
      let url:string = window.location.pathname;
      if (url.indexOf("monitor-pro") > -1){
        url=url.slice(0,url.indexOf("monitor-pro"));
      }
      return url;
    }*/
    ConfigService.prototype.fillConfigModel = function (res) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(res)) {
            this.configModel = new __WEBPACK_IMPORTED_MODULE_2__configModel__["a" /* ConfigModel */](res.user, res.pass, res.jenkinsUrl);
        }
        return this.configModel;
    };
    ConfigService.prototype.getUser = function () {
        return this.configModel.user;
    };
    ConfigService.prototype.getPass = function () {
        return this.configModel.pass;
    };
    ConfigService.prototype.getJenkinsUrl = function () {
        return this.configModel.jenkinsUrl;
    };
    ConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], ConfigService);
    return ConfigService;
    var _a;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/configService.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_model__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsGroup; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Created by frdiaz on 30/12/2016.
 */
var JobsGroup = (function (_super) {
    __extends(JobsGroup, _super);
    function JobsGroup() {
        _super.call(this);
        this.jobsList = [];
        this.result = "SUCCESS";
    }
    return JobsGroup;
}(__WEBPACK_IMPORTED_MODULE_0__job_model__["a" /* Job */]));
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/jobsGroup.model.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_model__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleJob; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Created by frdiaz on 14/12/2016.
 */
var SimpleJob = (function (_super) {
    __extends(SimpleJob, _super);
    function SimpleJob(jobData) {
        _super.call(this);
        this.name = jobData.name;
        this.urlJob = jobData.url;
        this.urlJobExecution = jobData.lastBuild.url;
        this.lastExecTime = jobData.lastBuild.duration;
        this.result = jobData.lastBuild.result;
        this.timestamp = new Date(jobData.lastBuild.timestamp);
        this.displayLastExecNumber = jobData.lastBuild.displayName;
    }
    return SimpleJob;
}(__WEBPACK_IMPORTED_MODULE_0__job_model__["a" /* Job */]));
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/simpleJob.model.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewModel; });
/**
 * Created by frdiaz on 18/12/2016.
 */
var JobsBasicViewModel = (function () {
    function JobsBasicViewModel(url, name) {
        this.url = url;
        this.name = name;
    }
    return JobsBasicViewModel;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/jobsBasicView.model.js.map

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(246)();
// imports


// module
exports.push([module.i, ".job {\r\n  margin: 10px 10px 10px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 412;


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(522);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/main.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobs_basic_view_jobsBasicView_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_jenkinsService_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_job_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobs_basic_view_menu_config_jobsBasicViewMenuConfig_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commons_configService__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_configServiceFactory__ = __webpack_require__(521);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__jobs_basic_view_jobsBasicView_component__["a" /* JobsBasicViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__job_job_component__["a" /* JobComponent */],
                __WEBPACK_IMPORTED_MODULE_8__jobs_basic_view_menu_config_jobsBasicViewMenuConfig_component__["a" /* JobsBasicViewMenConfComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__commons_configService__["a" /* ConfigService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* APP_INITIALIZER */], useFactory: __WEBPACK_IMPORTED_MODULE_10__commons_configServiceFactory__["a" /* configServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_9__commons_configService__["a" /* ConfigService */]], multi: true
                },
                __WEBPACK_IMPORTED_MODULE_6__commons_jenkinsService_service__["a" /* JenkinsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModel; });
/**
 * Created by frdiaz on 08/01/2017.
 */
var ConfigModel = (function () {
    function ConfigModel(user, pass, jenkinsUrl) {
        this.user = user;
        this.pass = pass;
        this.jenkinsUrl = jenkinsUrl;
    }
    return ConfigModel;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/configModel.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configServiceFactory;
/**
 * Created by frdiaz on 10/02/2017.
 */
function configServiceFactory(configurationService) {
    return function () { return configurationService.load(); };
}
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/configServiceFactory.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(337);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(519);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/index.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simpleJob_model__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_model__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobsGroup_model__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobComponent = (function () {
    function JobComponent() {
    }
    JobComponent.prototype.calculateProgres = function () {
    };
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent.prototype.isSimpleJob = function (job) {
        if (job instanceof __WEBPACK_IMPORTED_MODULE_1__simpleJob_model__["a" /* SimpleJob */]) {
            return true;
        }
        else if (job instanceof __WEBPACK_IMPORTED_MODULE_3__jobsGroup_model__["a" /* JobsGroup */]) {
            return false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__job_model__["a" /* Job */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__job_model__["a" /* Job */]) === 'function' && _a) || Object)
    ], JobComponent.prototype, "jobModel", void 0);
    JobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: "job",
            template: __webpack_require__(683)
        }), 
        __metadata('design:paramtypes', [])
    ], JobComponent);
    return JobComponent;
    var _a;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/job.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewMenuConfig_model__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewMenConfComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsBasicViewMenConfComponent = (function () {
    function JobsBasicViewMenConfComponent(jenkinsService) {
        this.jenkinsService = jenkinsService;
        this.toggleSettings = false;
        this.onSelectedView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
        this.onSelectNumColumn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
        this.onSetPollingInterval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
    }
    /**
     * Initialize the component. Load the initial configuration
     */
    JobsBasicViewMenConfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewConfig = new __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewMenuConfig_model__["a" /* JobsBasicViewMenuConfig */]();
        this.jenkinsService.getViews(this.urlJenkins).subscribe(function (views) {
            for (var _i = 0, _a = views.views; _i < _a.length; _i++) {
                var view = _a[_i];
                _this.viewConfig.views.push(view);
                if (view.name === views.primaryView.name) {
                    _this.viewConfig.jobsViewSelected = view;
                }
            }
            _this.onSelectedView.next(_this.viewConfig.jobsViewSelected);
        }, function (error) { return console.log(error); });
    };
    JobsBasicViewMenConfComponent.prototype.loadViewSelected = function () {
        this.onSelectedView.next(this.viewConfig.jobsViewSelected);
    };
    JobsBasicViewMenConfComponent.prototype.setColumnsLayout = function () {
        this.onSelectNumColumn.next(this.viewConfig.numColSelected);
    };
    JobsBasicViewMenConfComponent.prototype.onSubmit = function () {
        this.jenkinsService.submitForm();
        this.onSetPollingInterval.next(this.viewConfig.pollingInterval);
        console.log("Change value of polling: " + this.viewConfig.pollingInterval);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String)
    ], JobsBasicViewMenConfComponent.prototype, "urlJenkins", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(), 
        __metadata('design:type', Object)
    ], JobsBasicViewMenConfComponent.prototype, "onSelectedView", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(), 
        __metadata('design:type', Object)
    ], JobsBasicViewMenConfComponent.prototype, "onSelectNumColumn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(), 
        __metadata('design:type', Object)
    ], JobsBasicViewMenConfComponent.prototype, "onSetPollingInterval", void 0);
    JobsBasicViewMenConfComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'menu-config',
            template: __webpack_require__(684)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__["a" /* JenkinsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__["a" /* JenkinsService */]) === 'function' && _a) || Object])
    ], JobsBasicViewMenConfComponent);
    return JobsBasicViewMenConfComponent;
    var _a;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/jobsBasicViewMenuConfig.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewMenuConfig; });
/**
 * Created by frdiaz on 15/12/2016.
 */
var JobsBasicViewMenuConfig = (function () {
    function JobsBasicViewMenuConfig() {
        this.views = [];
        this.numColSelected = 1;
        this.combNumColumns = [1, 2, 3, 4, 5, 6, 7, 8];
        this.pollingInterval = 5;
    }
    return JobsBasicViewMenuConfig;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/jobsBasicViewMenuConfig.model.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewConfig__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobsBasicView_model__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobsBasicViewComponent = (function () {
    function JobsBasicViewComponent(jenkinsService) {
        this.jenkinsService = jenkinsService;
        this.jobsModel = [];
        this.jobsViewSelected = new __WEBPACK_IMPORTED_MODULE_4__jobsBasicView_model__["a" /* JobsBasicViewModel */](undefined, "No view selected jet.");
    }
    /**
     * Initializes the component. Load the initial configuration
     */
    JobsBasicViewComponent.prototype.ngOnInit = function () {
        this.viewConfig = new __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewConfig__["a" /* JobsBasicViewConfig */]();
    };
    JobsBasicViewComponent.prototype.ngOnDestroy = function () {
        console.log("Llamada a ngOnDestroy.");
        if (!this.subscription != null) {
            console.log("Llamada a ngOnDestroy.");
            this.subscription.unsubscribe();
        }
    };
    /**
     * Starts load of jobs status
     * @param url
     */
    JobsBasicViewComponent.prototype.initLoadJobsStatus = function (url) {
        var _this = this;
        this.jenkinsService.getJobsStatus(url).subscribe(function (jobsModelAux) { return _this.jobsModel = jobsModelAux; }, function (error) { return console.log("Error retriving data"); });
        /* Starts the polling configuration */
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(this.viewConfig.pollingIntervalInMilSecond);
        this.subscription = this.timer
            .subscribe(function () {
            _this.jenkinsService.getJobsStatus(url).subscribe(function (jobsModelAux) { return _this.jobsModel = jobsModelAux; }, function (error) { return console.log("Error retriving data"); });
        });
        /* Ends the polling configuration */
    };
    /**
     * Sets the number of columns to the view
     */
    JobsBasicViewComponent.prototype.setColumnsLayout = function (numColumnsSelected) {
        this.viewConfig.classColumn = "columns-" + numColumnsSelected;
    };
    /**
     * Loads data of selected view.
     */
    JobsBasicViewComponent.prototype.loadViewSelected = function (jobsViewSelected) {
        this.initLoadJobsStatus(jobsViewSelected.url);
        this.jobsViewSelected = jobsViewSelected;
    };
    /**
     * Changes value of polling interval and data reload
     */
    JobsBasicViewComponent.prototype.setPollingInterval = function (pollingIntervalInSec) {
        this.viewConfig.pollingIntervalInMilSecond = pollingIntervalInSec * 1000;
        this.initLoadJobsStatus(this.jobsViewSelected.url);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String)
    ], JobsBasicViewComponent.prototype, "urlJenkins", void 0);
    JobsBasicViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'jobsBasicView',
            template: __webpack_require__(685),
            styles: [__webpack_require__(379)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__["a" /* JenkinsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__["a" /* JenkinsService */]) === 'function' && _a) || Object])
    ], JobsBasicViewComponent);
    return JobsBasicViewComponent;
    var _a;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/jobsBasicView.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewConfig; });
/**
 * Created by frdiaz on 15/12/2016.
 */
var JobsBasicViewConfig = (function () {
    function JobsBasicViewConfig() {
        this.classColumn = "columns-1";
        this.pollingIntervalInMilSecond = 5000;
    }
    return JobsBasicViewConfig;
}());
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/jobsBasicViewConfig.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/environment.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=D:/TFC/Proyecto/Prototipo1/JobsDashBoard/src/polyfills.js.map

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<header><h1>\n  {{title}}\n</h1>\n</header>\n\n<jobsBasicView [urlJenkins]=\"urlJenkins\"></jobsBasicView>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h2><a title=\"{{jobModel.name}}\" href=\"{{jobModel.urlJob}}\">{{jobModel.name}}</a></h2>\r\n</header>\r\n<div *ngIf=\"isSimpleJob(jobModel)\" name=\"simpleJob\" class=\"slots\">\r\n  <div class=\"slot-1\"><h2><label for=\"lastBuild\">Last Build:</label>\r\n    <a id=\"lastBuild\" href=\"{{jobModel.urlJobExecution}}\">{{jobModel.displayLastExecNumber}}</a></h2></div>\r\n  <div class=\"slot-2\">{{jobModel.timestamp | date:'short' }}</div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!isSimpleJob(jobModel)\" name=\"groupedJob\" class=\"slots\">\r\n\r\n  <div class=\"slot-3\"><h2><label for=\"configurations\">Builds:</label></h2></div>\r\n  <ul id=\"configurations\">\r\n    <template ngFor let-jobBuild [ngForOf]=\"jobModel.jobsList\">\r\n      <!--ul id=\"configurations\"-->\r\n      <!--<div name=\"SimpleJob\"-->\r\n        <li>\r\n          <div class=\"slot-1\">\r\n            <a name=\"build\" id=\"build\" href=\"{{jobBuild.urlJobExecution}}\"> Build:\r\n              {{jobBuild.displayLastExecNumber}} </a> | Job: {{jobBuild.name}} --> Result:\r\n            <span [ngSwitch]=\"jobBuild.result\">\r\n                  <span *ngSwitchCase=\"'SUCCESS'\"> - OK</span>\r\n                  <span *ngSwitchCase=\"'FAILURE'\"> - KO</span>\r\n                  <span *ngSwitchCase=\"'UNSTABLE'\"> - UN</span>\r\n                  <span *ngSwitchCase=\"'ABORTED'\"> - AB</span>\r\n                  <span *ngSwitchCase=\"'DISABLED'\"> - N/A</span>\r\n                  <span *ngSwitchDefault>-!</span>\r\n                </span>\r\n          </div>\r\n          <div name=\"OtherData\" class=\"slot-2\"> | {{jobBuild.timestamp | date:'short' }}</div>\r\n        </li>\r\n      <!--/div-->\r\n      <!--/ul-->\r\n    </template>\r\n  </ul>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "  <nav id=\"menuLateral\">\r\n    <section [class.showSettings]=\"toggleSettings\">\r\n      <input id=\"settings-toggle\" type=\"checkbox\" class=\"settings\" [(ngModel)]=\"toggleSettings\"/>\r\n      <label for=\"settings-toggle\" title=\"Configure Build Monitor Settings\">Settings</label>\r\n\r\n      <ul>\r\n        <li class=\"settings-option\">\r\n          <label for=\"combViewSelction\">Views:</label>\r\n          <select [(ngModel)]=\"viewConfig.jobsViewSelected\" class=\"form-control\" id=\"combViewSelction\" name=\"combViewSelction\" (ngModelChange)=\"loadViewSelected()\" >\r\n            <option *ngFor=\"let view of viewConfig.views\" [selected]=\"view.name == viewConfig.jobsViewSelected.name\" [disabled]=\"view.name == viewConfig.jobsViewSelected.name\" [ngValue]=\"view\">{{view.name}}</option>\r\n          </select>\r\n        </li>\r\n        <li class=\"settings-option\">\r\n          <label for=\"combNumColumns\">Maximun number of columns:</label>\r\n          <select [(ngModel)]=\"viewConfig.numColSelected\" class=\"form-control\" id=\"combNumColumns\" name=\"combNumColumns\" (change)=\"setColumnsLayout()\" >\r\n            <option *ngFor=\"let numColumn of viewConfig.combNumColumns\" [value]=\"numColumn\">{{numColumn}}</option>\r\n          </select>\r\n        </li>\r\n        <li class=\"settings-option\">\r\n          <form (ngSubmit)=\"onSubmit()\" action=\"http://localhost:8080/monitor-pro/prove\">\r\n            <label for=\"inputPollInterval\">Refresh interval (in seconds):</label>\r\n            <input type=\"number\" [(ngModel)]=\"viewConfig.pollingInterval\" id=\"inputPollInterval\" name=\"inputPollInterval\" min=\"1\" max=\"60\">\r\n            <input type=\"submit\">\r\n          </form>\r\n        </li>\r\n      </ul>\r\n    </section>\r\n  </nav>\r\n\r\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<h2>View: {{jobsViewSelected.name}}</h2>\r\n<header>\r\n  <menu-config (onSelectedView)=\"loadViewSelected($event)\" (onSelectNumColumn)=\"setColumnsLayout($event)\" (onSetPollingInterval)=\"setPollingInterval($event)\"  [urlJenkins]=\"urlJenkins\">Configuration Menu</menu-config>\r\n</header>\r\n\r\n<div>\r\n  <!-- Jobs List -->\r\n  <ul id=\"widgets\" [class] = \"viewConfig.classColumn\">\r\n    <li *ngFor=\"let jobData of jobsModel\" [ngClass]=\"jobData.getClasses()\">\r\n      <job  [jobModel]=\"jobData\" ></job>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(413);


/***/ })

},[962]);
//# sourceMappingURL=main.bundle.js.map