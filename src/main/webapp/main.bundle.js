webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".job {\n  margin: 10px 10px 10px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header><h1>\n  {{title}}\n</h1>\n</header>\n\n<jobsBasicView [urlJenkins]=\"urlJenkins\"></jobsBasicView>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.title = 'Monitor Pro v1.0';
        this.urlJenkins = 'http://localhost:8080/jenkins'; // by default
        this.urlJenkins = elm.nativeElement.getAttribute('urlJenkins');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobs_basic_view_jobsBasicView_component__ = __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_jenkinsService_service__ = __webpack_require__("../../../../../src/app/commons/jenkinsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_job_component__ = __webpack_require__("../../../../../src/app/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobs_basic_view_menu_config_jobsBasicViewMenuConfig_component__ = __webpack_require__("../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commons_configService__ = __webpack_require__("../../../../../src/app/commons/configService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_configServiceFactory__ = __webpack_require__("../../../../../src/app/commons/configServiceFactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__jobs_basic_view_jobsBasicView_component__["a" /* JobsBasicViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_8__jobs_basic_view_menu_config_jobsBasicViewMenuConfig_component__["a" /* JobsBasicViewMenConfComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__commons_configService__["a" /* ConfigService */], {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* APP_INITIALIZER */], useFactory: __WEBPACK_IMPORTED_MODULE_10__commons_configServiceFactory__["a" /* configServiceFactory */],
                deps: [__WEBPACK_IMPORTED_MODULE_9__commons_configService__["a" /* ConfigService */]], multi: true
            },
            __WEBPACK_IMPORTED_MODULE_6__commons_jenkinsService_service__["a" /* JenkinsService */],
            __WEBPACK_IMPORTED_MODULE_11__commons_configPropService__["a" /* ConfigPropService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/commons/configPropService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by mmariscalg on 27/02/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigPropService = (function () {
    function ConfigPropService() {
    }
    ConfigPropService.prototype.getHideOK = function () {
        return this.hideOK;
    };
    ConfigPropService.prototype.setHideOK = function (hideOK) {
        this.hideOK = hideOK;
    };
    ConfigPropService.prototype.getBranches = function () {
        return this.branches;
    };
    ConfigPropService.prototype.setBranches = function (branches) {
        this.branches = branches;
    };
    return ConfigPropService;
}());
ConfigPropService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ConfigPropService);

//# sourceMappingURL=configPropService.js.map

/***/ }),

/***/ "../../../../../src/app/commons/configService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
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
            _this.http.get('./assets/securityConfig.json')
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                console.log('Deployed as plugin.');
                _this._configModel = { 'user': '', 'pass': '',
                    'jenkinsUrl': 'http://localhost:8080/jenkins/', 'jenkinsPlugin': true };
                resolve();
            })
                .subscribe(function (data) {
                // Application run as standalone app
                _this.fillConfigModel(data);
                resolve();
            });
        });
    };
    ConfigService.prototype.fillConfigModel = function (newConfig) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(newConfig)) {
            this._configModel = newConfig;
        }
        return this._configModel;
    };
    ConfigService.prototype.getUser = function () {
        return this._configModel.user;
    };
    ConfigService.prototype.getPass = function () {
        return this._configModel.pass;
    };
    ConfigService.prototype.getJenkinsUrl = function () {
        return this._configModel.jenkinsUrl;
    };
    Object.defineProperty(ConfigService.prototype, "configModel", {
        get: function () {
            return this._configModel;
        },
        set: function (value) {
            this._configModel = value;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigService);

var _a;
//# sourceMappingURL=configService.js.map

/***/ }),

/***/ "../../../../../src/app/commons/configServiceFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configServiceFactory;
/**
 * Created by frdiaz on 10/02/2017.
 */
function configServiceFactory(configurationService) {
    return function () { return configurationService.load(); };
}
//# sourceMappingURL=configServiceFactory.js.map

/***/ }),

/***/ "../../../../../src/app/commons/jenkinsService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JenkinsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configService__ = __webpack_require__("../../../../../src/app/commons/configService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_jobsGroup_model__ = __webpack_require__("../../../../../src/app/job/jobsGroup.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__ = __webpack_require__("../../../../../src/app/job/simpleJob.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
/**
 * Created by frdiaz on 02/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JenkinsService = JenkinsService_1 = (function () {
    function JenkinsService(http, configService, configPropService) {
        this.http = http;
        this.configService = configService;
        this.configPropService = configPropService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        this.jobsGroupsFinded = {};
        this.jobsGroupsNamesList = [];
        this.jobsGroupsParam = new Map();
        this.groups = [];
        this.controlBranch = new Map();
    }
    /**
     * Configures headers to invoke the server
     * @param authentication
     */
    JenkinsService.prototype.configHeaders = function (authentication) {
        if (authentication) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
            this.headers.append('Authorization', 'Basic ' + btoa(this.configService.getUser() + ':' + this.configService.getPass()));
        }
        this.headers.append('Content-Type', 'application/json');
        this.resquestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: this.headers,
        });
    };
    /**
     * Retrieves the exists views in Jenkins
     * @param urlJenkins
     * @returns {Observable<R>}
     */
    JenkinsService.prototype.getViews = function (urlJenkins) {
        var invokeUrl = (urlJenkins !== null && urlJenkins !== undefined && urlJenkins === this.configService.getJenkinsUrl()) ?
            urlJenkins : this.configService.getJenkinsUrl();
        invokeUrl = invokeUrl + JenkinsService_1.endViewsUrl;
        console.log('Path:' + window.location.href);
        this.configHeaders((urlJenkins === null || urlJenkins === undefined || !window.location.href.includes(urlJenkins)));
        return this.http.post(invokeUrl, undefined, this.resquestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
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
        this.groups = [];
        this.jobsGroupsParam = new Map();
        if (urlFolderOfJobs === undefined) {
            this.invokedUrl = this.configService.getJenkinsUrl() + JenkinsService_1.endJobsDataUrl;
        }
        else {
            this.invokedUrl = urlFolderOfJobs + JenkinsService_1.endJobsDataUrl;
        }
        return this.http.post(this.invokedUrl, undefined, this.resquestOptions)
            .map(function (response) { return _this.createJobData(response.json().jobs); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
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
            var group_1 = _b[_a];
            if (group_1 === 'reminder' || this.jobsGroupsFinded[group_1].length === 0) {
                for (var _c = 0, _d = this.jobsGroupsFinded[group_1]; _c < _d.length; _c++) {
                    var job = _d[_c];
                    var jobModel = new __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__["a" /* SimpleJob */](job);
                    jobModel.setStatusClass();
                    jobModelAux.push((jobModel));
                }
            }
            else {
                var principalJobModel = new __WEBPACK_IMPORTED_MODULE_4__job_jobsGroup_model__["a" /* JobsGroup */]();
                principalJobModel.name = group_1;
                for (var _e = 0, _f = this.jobsGroupsFinded[group_1]; _e < _f.length; _e++) {
                    var job = _f[_e];
                    var jobModel = new __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__["a" /* SimpleJob */](job);
                    jobModel.setStatusClass();
                    if (this.controlBranch.get(jobModel.name) !== undefined) {
                        jobModel.master = this.controlBranch.get(jobModel.name);
                        if (this.configPropService.getBranches() && jobModel.master !== '') {
                            jobModel.result = 'SUCCESS_';
                        }
                    }
                    if (jobModel.result !== 'SUCCESS') {
                        if (this.jobsGroupsParam.has(jobModel.name)) {
                            jobModel.param = this.jobsGroupsParam.get(jobModel.name);
                        }
                        principalJobModel.result = jobModel.result;
                        console.log('GROUP JOB Result: ' + principalJobModel.name + ' - ' + principalJobModel.result);
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
        var _this = this;
        this.checkBranch(job.url).subscribe(function (res) {
            var control = '';
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var actionBranch = res_1[_i];
                if (actionBranch._class === 'hudson.plugins.git.util.BuildData') {
                    if (actionBranch.lastBuiltRevision.branch[0].name.search(new RegExp('ORIGIN\/MASTER', 'i')) === -1) {
                        control = actionBranch.lastBuiltRevision.branch[0].name;
                    }
                }
            }
            _this.controlBranch.set(job.name, control);
        }, function (error) { return console.log(error); });
        for (var _i = 0, _a = job.lastBuild.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            if (action._class === undefined || action._class === 'hudson.model.ParametersAction') {
                if (action.parameters !== undefined) {
                    var aux = [];
                    var auxParams = [];
                    for (var i = 0; i < action.parameters.length; i++) {
                        aux[i] = action.parameters[i].name;
                        auxParams[i] = action.parameters[i].value;
                    }
                    aux.sort();
                    var auxName = this.createPrintableGroup(aux);
                    var newGroup = { params: aux, id: auxName };
                    if (this.groups.length === 0) {
                        this.groups.push(newGroup);
                    }
                    else {
                        var found = false;
                        for (var i = 0; i < this.groups.length; i++) {
                            if (this.groups[i].params.length === action.parameters.length && this.groups[i].id === auxName) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            this.groups.push(newGroup);
                        }
                        if (this.jobsGroupsFinded[auxName] !== undefined) {
                            this.jobsGroupsFinded[auxName].push(job);
                        }
                        else {
                            this.jobsGroupsNamesList.push(auxName);
                            this.jobsGroupsFinded[auxName] = [job];
                        }
                        var auxParamsValues = this.createPrintableParams(auxParams);
                        if (!this.jobsGroupsParam.has(job.name)) {
                            this.jobsGroupsParam.set(job.name, auxParamsValues);
                        }
                    }
                }
                else {
                    if (this.jobsGroupsFinded['reminder'] !== undefined) {
                        this.jobsGroupsFinded['reminder'].push(job);
                    }
                    else {
                        this.jobsGroupsNamesList.push('reminder');
                        this.jobsGroupsFinded['reminder'] = [job];
                    }
                }
                break;
            }
        }
    };
    JenkinsService.prototype.checkBranch = function (job) {
        var jobUrl = job + 'lastBuild/api/json?tree=actions[lastBuiltRevision[branch[name]]]';
        return this.http.get(jobUrl)
            .map(function (response) { return response.json().actions; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    JenkinsService.prototype.createPrintableGroup = function (names) {
        var chain = '';
        for (var i = 0; i < names.length; i++) {
            if (i !== (names.length - 1)) {
                chain += names[i] + ' | ';
            }
            else {
                chain += names[i];
            }
        }
        return chain;
    };
    JenkinsService.prototype.createPrintableParams = function (values) {
        var chain = '';
        for (var i = 0; i < values.length; i++) {
            if (i !== (values.length - 1)) {
                chain += 'VALUE= ' + values[i] + ' | ';
            }
            else {
                chain += 'VALUE= ' + values[i];
            }
        }
        return chain;
    };
    JenkinsService.prototype.submitForm = function () {
        console.log('Sends form to the Server');
    };
    return JenkinsService;
}());
JenkinsService.endJobsDataUrl = 'api/json?tree=jobs[name,url,buildable,lastBuild[*,actions[parameters[*]]]]';
JenkinsService.endViewsUrl = 'api/json?tree=views[url,name],primaryView[url,name]';
JenkinsService = JenkinsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__configService__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__configService__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__configPropService__["a" /* ConfigPropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__configPropService__["a" /* ConfigPropService */]) === "function" && _c || Object])
], JenkinsService);

var JenkinsService_1, _a, _b, _c;
//# sourceMappingURL=jenkinsService.service.js.map

/***/ }),

/***/ "../../../../../src/app/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"isSimpleJob(jobModel)\">\n  <h2><a title=\"{{jobModel.name}}\" href=\"{{jobModel.urlJob}}\">Job: {{jobModel.name}}</a></h2>\n</header>\n<div *ngIf=\"isSimpleJob(jobModel)\" name=\"simpleJob\" class=\"slots\">\n  <div class=\"slot-1\"><h2><label for=\"lastBuild\">Last Build:</label>\n    <a id=\"lastBuild\" href=\"{{jobModel.urlJobExecution}}\">{{jobModel.displayLastExecNumber}}</a></h2></div>\n  <div class=\"slot-2\">{{jobModel.timestamp | date:\"dd/MM/yy hh:mm\"  }}</div>\n</div>\n\n<header *ngIf=\"!isSimpleJob(jobModel)\">\n  <h2>Group: {{jobModel.name}}</h2>\n</header>\n<div *ngIf=\"!isSimpleJob(jobModel)\" name=\"groupedJob\" class=\"slots\">\n  <div *ngIf=\"!hideOK\" class=\"slot-3\">\n    <h2>\n      <label for=\"configurations\">Builds:</label>\n    </h2>\n  </div>\n  <div *ngIf=\"hideOK&&errorAtLeastOne(jobModel)\" class=\"slot-3\">\n    <h2>\n      <label for=\"configurations\">Builds:</label>\n    </h2>\n  </div>\n  <ul id=\"configurations\">\n    <ng-template ngFor let-jobBuild [ngForOf]=\"jobModel.jobsList\">\n        <li *ngIf=\"!hideOK\">\n          <div class=\"slot-1\">\n            <span><a name=\"{{jobBuild.name}}\" href=\"{{jobBuild.urlJob}}\"> {{jobBuild.name}} </a></span>\n            <span><a name=\"build\" id=\"build\" href=\"{{jobBuild.urlJobExecution}}\"> | {{jobBuild.displayLastExecNumber}} </a></span>           \n            <span [ngSwitch]=\"jobBuild.result\"> &rArr;\n                <span *ngSwitchCase=\"'SUCCESS'\" class=\"job-exec-ok\">Result: OK</span>\n                <span *ngSwitchCase=\"'SUCCESS_'\" class=\"job-exec-ok\">Result: NO OK | Branch: {{jobBuild.master}}</span>\n                <span *ngSwitchCase=\"'FAILURE'\" class=\"job-exec-ko\">Result: KO &rArr; {{jobBuild.param}}</span>\n                <span *ngSwitchCase=\"'UNSTABLE'\" class=\"job-exec-un\">Result: UN</span>\n                <span *ngSwitchCase=\"'ABORTED'\">Result: - AB</span>\n                <span *ngSwitchCase=\"'DISABLED'\">Result: - N/A</span>\n                <span *ngSwitchDefault class=\"job-exec-unk\">Result: !</span>\n            </span>\n            <span name=\"OtherData\"> | {{jobBuild.timestamp | date:\"dd/MM/yy hh:mm\" }}</span>\n          </div>\n        </li>\n        <li *ngIf=\"hideOK&&jobBuild.result!=='SUCCESS'&&jobBuild.result!=='SUCCESS_'\">\n          <div class=\"slot-1\">\n            <span><a name=\"{{jobBuild.name}}\" href=\"{{jobBuild.urlJob}}\"> {{jobBuild.name}} </a></span>\n            <span><a name=\"build\" id=\"build\" href=\"{{jobBuild.urlJobExecution}}\"> | {{jobBuild.displayLastExecNumber}} </a></span>           \n            <span [ngSwitch]=\"jobBuild.result\"> &rArr;\n              <span *ngSwitchCase=\"'FAILURE'\" class=\"job-exec-ko\">Result: KO &rArr; {{jobBuild.param}}</span>\n              <span *ngSwitchCase=\"'UNSTABLE'\" class=\"job-exec-un\">Result: UN</span>\n              <span *ngSwitchCase=\"'ABORTED'\">Result: - AB</span>\n              <span *ngSwitchCase=\"'DISABLED'\">Result: - N/A</span>\n              <span *ngSwitchDefault class=\"job-exec-unk\">Result: !</span>\n            </span>\n            <span name=\"OtherData\"> | {{jobBuild.timestamp | date:\"dd/MM/yy hh:mm\" }}</span>\n          </div>\n        </li>\n    </ng-template>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simpleJob_model__ = __webpack_require__("../../../../../src/app/job/simpleJob.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_model__ = __webpack_require__("../../../../../src/app/job/job.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobsGroup_model__ = __webpack_require__("../../../../../src/app/job/jobsGroup.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
/**
 * Created by frdiaz on 12/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
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
    function JobComponent(_propService) {
        this._propService = _propService;
    }
    JobComponent.prototype.calculateProgres = function () {
    };
    JobComponent.prototype.ngOnInit = function () {
        this.hideOK = this._propService.getHideOK();
        this.branches = this._propService.getBranches();
    };
    JobComponent.prototype.isSimpleJob = function (job) {
        if (job instanceof __WEBPACK_IMPORTED_MODULE_1__simpleJob_model__["a" /* SimpleJob */]) {
            return true;
        }
        else if (job instanceof __WEBPACK_IMPORTED_MODULE_3__jobsGroup_model__["a" /* JobsGroup */]) {
            return false;
        }
    };
    JobComponent.prototype.errorAtLeastOne = function (jobGroup) {
        var error = false;
        for (var i = 0; i < jobGroup.jobsList.length; i++) {
            if (jobGroup.jobsList[i].result !== 'SUCCESS' && jobGroup.jobsList[i].result !== 'SUCCESS_') {
                error = true;
                break;
            }
        }
        return error;
    };
    return JobComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__job_model__["a" /* Job */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__job_model__["a" /* Job */]) === "function" && _a || Object)
], JobComponent.prototype, "jobModel", void 0);
JobComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'job',
        template: __webpack_require__("../../../../../src/app/job/job.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */]) === "function" && _b || Object])
], JobComponent);

var _a, _b;
//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ "../../../../../src/app/job/job.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
/**
 * Created by frdiaz on 30/12/2016.
 * Modified by mmariscalg on 27/02/2018
 */
var Job = (function () {
    function Job() {
        this.statusClass = 'basic project widget unknown';
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
            case 'SUCCESS':
                this.statusClass = 'successful';
                break;
            case 'SUCCESS_':
                this.statusClass = 'successful';
                break;
            case 'FAILURE':
                this.statusClass = 'failing';
                break;
            case 'UNSTABLE':
                this.statusClass = 'unstable';
                break;
            case 'ABORTED':
                this.statusClass = 'aborted';
                break;
            case 'DISABLED':
                this.statusClass = 'disabled';
                break;
            default:
                this.statusClass = 'unknown';
        }
    };
    /**
     * Returns a map with the jobs's styles classes
     * @returns {{basic: boolean, project: boolean, widget: boolean, unknown: boolean, failing: boolean,
     *  successful: boolean, unstable: boolean, aborted: boolean, disabled: boolean}}
     */
    Job.prototype.getClasses = function () {
        return {
            basic: true,
            project: true,
            widget: true,
            unknown: this.statusClass === 'unknown',
            failing: this.statusClass === 'failing',
            successful: this.statusClass === 'successful',
            unstable: this.statusClass === 'unstable',
            aborted: this.statusClass === 'aborted',
            disabled: this.statusClass === 'disabled'
        };
    };
    return Job;
}());

//# sourceMappingURL=job.model.js.map

/***/ }),

/***/ "../../../../../src/app/job/jobsGroup.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_model__ = __webpack_require__("../../../../../src/app/job/job.model.ts");
/**
 * Created by frdiaz on 30/12/2016.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JobsGroup = (function (_super) {
    __extends(JobsGroup, _super);
    function JobsGroup() {
        var _this = _super.call(this) || this;
        _this.jobsList = [];
        _this.result = 'SUCCESS';
        return _this;
    }
    return JobsGroup;
}(__WEBPACK_IMPORTED_MODULE_0__job_model__["a" /* Job */]));

//# sourceMappingURL=jobsGroup.model.js.map

/***/ }),

/***/ "../../../../../src/app/job/simpleJob.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_model__ = __webpack_require__("../../../../../src/app/job/job.model.ts");
/**
 * Created by frdiaz on 14/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SimpleJob = (function (_super) {
    __extends(SimpleJob, _super);
    function SimpleJob(jobData) {
        var _this = _super.call(this) || this;
        _this.name = jobData.name;
        _this.urlJob = jobData.url;
        _this.urlJobExecution = jobData.lastBuild.url;
        _this.lastExecTime = jobData.lastBuild.duration;
        _this.result = jobData.lastBuild.result;
        _this.timestamp = new Date(jobData.lastBuild.timestamp);
        _this.displayLastExecNumber = jobData.lastBuild.displayName;
        _this.master = '';
        return _this;
    }
    return SimpleJob;
}(__WEBPACK_IMPORTED_MODULE_0__job_model__["a" /* Job */]));

//# sourceMappingURL=simpleJob.model.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav id=\"menuLateral\">\n    <section [class.showSettings]=\"toggleSettings\">\n      <input id=\"settings-toggle\" type=\"checkbox\" class=\"settings\" [(ngModel)]=\"toggleSettings\"/>\n      <label for=\"settings-toggle\" title=\"Configure Build Monitor Settings\">Settings</label>\n\n      <ul>\n        <li class=\"settings-option\">\n          <label for=\"combViewSelction\">Views:</label>\n          <select [(ngModel)]=\"viewConfig.jobsViewSelected\" class=\"form-control\" id=\"combViewSelction\" name=\"combViewSelction\" (ngModelChange)=\"loadViewSelected()\" >\n            <option *ngFor=\"let view of viewConfig.views\" [selected]=\"view.name == viewConfig.jobsViewSelected.name\" [disabled]=\"view.name == viewConfig.jobsViewSelected.name\" [ngValue]=\"view\">{{view.name}}</option>\n          </select>\n        </li>\n        <li class=\"settings-option\">\n          <label for=\"combNumColumns\">Maximun number of columns:</label>\n          <select [(ngModel)]=\"viewConfig.numColSelected\" class=\"form-control\" id=\"combNumColumns\" name=\"combNumColumns\" (change)=\"setColumnsLayout()\" >\n            <option *ngFor=\"let numColumn of viewConfig.combNumColumns\" [value]=\"numColumn\">{{numColumn}}</option>\n          </select>\n        </li>\n      </ul>\n      \n      \n        <form *ngIf=\"toggleSettings\">\n        <fieldset>\n          <legend>Jenkins Configuration:</legend>\n        <ul>\n        <li class=\"settings-option\">          \n            <div>\n              <label for=\"inputPollInterval\">Refresh interval (in seconds):</label>\n              <input type=\"number\" [(ngModel)]=\"viewConfig.pollingInterval\" id=\"inputPollInterval\" name=\"inputPollInterval\" min=\"1\" max=\"60\">\n            </div>\n        </li>\n         <li class=\"settings-option\">\n            <div>\n              <label for=\"jenkinsUser\">Jenkins User:</label>\n              <input type=\"text\" name=\"jenkinsUser\" id=\"jenkinsUser\" [(ngModel)]=\"viewConfig.configuration.user\">            \n            </div>\n         </li>\n          <li class=\"settings-option\">\n            <div>\n              <label for=\"jenkinsPassword\">Jenkins Password:</label>\n              <input type=\"password\" name=\"jenkinsPassword\" id=\"jenkinsPassword\" [(ngModel)]=\"viewConfig.configuration.pass\">\n            </div>\n          </li>\n          <li class=\"settings-option\">\n            <div>\n              <label for=\"jenkinsUrl\">Jenkins Url:</label>\n              <input type=\"text\" name=\"jenkinsUrl\" id=\"jenkinsUrl\" [(ngModel)]=\"viewConfig.configuration.jenkinsUrl\">\n            </div>\n          </li>\n          <li class=\"settings-option\">\n            <div>\n              <label for=\"jenkinsHideOK\">Hide success builds:</label>\n            <div>\n            </div>\n              <input type=\"checkbox\" name=\"jenkinsHideOK\" id=\"jenkinsHideOK\" [(ngModel)]=\"viewConfig.hideOK\" (change)=\"hideBuilds()\">\n            </div>\n          </li>\n          <li class=\"settings-option\">\n            <div>\n              <label for=\"jenkinsMaster\">Hide errors for no Master branches:</label>\n            <div>\n            </div>\n              <input type=\"checkbox\" name=\"jenkinsMaster\" id=\"jenkinsMaster\" [(ngModel)]=\"viewConfig.branches\" (change)=\"allNoMasterOK()\">\n            </div>\n          </li>\n          <li class=\"settings-option\">\n            <div>\n              <input type=\"submit\" (click)=\"onSubmit()\" value=\"Send\">\n            </div>          \n          </li>\n        </ul>\n        </fieldset>\n        </form>\n\n    </section>\n  </nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewMenConfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewMenuConfig_model__ = __webpack_require__("../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__ = __webpack_require__("../../../../../src/app/commons/jenkinsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_configService__ = __webpack_require__("../../../../../src/app/commons/configService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
/**
 * Created by frdiaz on 20/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
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
    function JobsBasicViewMenConfComponent(jenkinsService, configService, _propService) {
        this.jenkinsService = jenkinsService;
        this.configService = configService;
        this._propService = _propService;
        this.toggleSettings = false;
        this.onSelectedView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSelectNumColumn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSetPollingInterval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onUnsuscribePrevious = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * Initialize the component. Load the initial configuration
     */
    JobsBasicViewMenConfComponent.prototype.ngOnInit = function () {
        this.loadViews();
    };
    JobsBasicViewMenConfComponent.prototype.loadViews = function () {
        var _this = this;
        console.log('URL JENKINS: ' + this.urlJenkins);
        if (this.viewConfig === undefined || this.viewConfig === null) {
            this.viewConfig = new __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewMenuConfig_model__["a" /* JobsBasicViewMenuConfig */]();
            this.viewConfig.configuration = this.configService.configModel;
            console.log('New configuration:' + this.viewConfig.configuration.jenkinsUrl);
        }
        else {
            console.log('Previous Url:' + this.viewConfig.configuration.jenkinsUrl);
            this.urlJenkins = this.viewConfig.configuration.jenkinsUrl;
            this.viewConfig.views.splice(0, this.viewConfig.views.length);
        }
        this.jenkinsService.getViews(this.urlJenkins).subscribe(function (views) {
            for (var _i = 0, _a = views.views; _i < _a.length; _i++) {
                var view = _a[_i];
                _this.viewConfig.views.push(view);
                if (view.name === views.primaryView.name) {
                    _this.viewConfig.jobsViewSelected = view;
                }
            }
            _this.viewConfig.configuration = _this.configService.configModel;
            _this.onSelectedView.next(_this.viewConfig.jobsViewSelected);
        }, function (error) {
            console.log(error);
            _this.onUnsuscribePrevious.next('Connection error.');
            alert('Connection to Jenkins Fails. Check the connection settings.');
            _this.toggleSettings = true;
        });
    };
    JobsBasicViewMenConfComponent.prototype.loadViewSelected = function () {
        this.onSelectedView.next(this.viewConfig.jobsViewSelected);
    };
    JobsBasicViewMenConfComponent.prototype.setColumnsLayout = function () {
        this.onSelectNumColumn.next(this.viewConfig.numColSelected);
    };
    JobsBasicViewMenConfComponent.prototype.onSubmit = function () {
        this.configService.configModel = this.viewConfig.configuration;
        this.loadViews();
        this.onSetPollingInterval.next(this.viewConfig.pollingInterval);
        console.log('Change plugin configuration: ' + this.viewConfig.pollingInterval);
    };
    JobsBasicViewMenConfComponent.prototype.hideBuilds = function () {
        this._propService.setHideOK(this.viewConfig.hideOK);
        this.loadViews();
    };
    JobsBasicViewMenConfComponent.prototype.allNoMasterOK = function () {
        this._propService.setBranches(this.viewConfig.branches);
        this.loadViews();
    };
    return JobsBasicViewMenConfComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], JobsBasicViewMenConfComponent.prototype, "urlJenkins", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onSelectedView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onSelectNumColumn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onSetPollingInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onUnsuscribePrevious", void 0);
JobsBasicViewMenConfComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'menu-config',
        template: __webpack_require__("../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__["a" /* JenkinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__["a" /* JenkinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__commons_configService__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__commons_configService__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */]) === "function" && _c || Object])
], JobsBasicViewMenConfComponent);

var _a, _b, _c;
//# sourceMappingURL=jobsBasicViewMenuConfig.component.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewMenuConfig; });
/**
 * Created by frdiaz on 15/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
var JobsBasicViewMenuConfig = (function () {
    function JobsBasicViewMenuConfig() {
        this.views = [];
        this.numColSelected = 1;
        this.combNumColumns = [1, 2, 3, 4, 5, 6, 7, 8];
        this.pollingInterval = 5;
        this.hideOK = false;
        this.branches = false;
        this.configuration = { 'user': 'monitor-pro', 'pass': '', 'jenkinsUrl': 'http://localhost:8080/jenkins/', 'jenkinsPlugin': false };
    }
    return JobsBasicViewMenuConfig;
}());

//# sourceMappingURL=jobsBasicViewMenuConfig.model.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicView.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>View: {{jobsViewSelected.name}}</h2>\n<header>\n  <menu-config (onSelectedView)=\"loadViewSelected($event)\" (onSelectNumColumn)=\"setColumnsLayout($event)\" (onSetPollingInterval)=\"setPollingInterval($event)\"  (onUnsuscribePrevious)=\"unsuscribePrevious($event)\" [urlJenkins]=\"urlJenkins\">Configuration Menu</menu-config>\n</header>\n\n<div>\n  <!-- Jobs List -->\n  <ul id=\"widgets\" [class] = \"viewConfig.classColumn\">\n    <li *ngFor=\"let jobData of jobsModel\" [ngClass]=\"jobData.getClasses()\">\n      <job  [jobModel]=\"jobData\"></job>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewConfig__ = __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicViewConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__ = __webpack_require__("../../../../../src/app/commons/jenkinsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobsBasicView_model__ = __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicView.model.ts");
/**
 * Created by frdiaz on 02/12/2016.
 */
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
        this.jobsViewSelected = new __WEBPACK_IMPORTED_MODULE_4__jobsBasicView_model__["a" /* JobsBasicViewModel */](undefined, 'No view selected jet.');
    }
    /**
     * Initializes the component. Load the initial configuration
     */
    JobsBasicViewComponent.prototype.ngOnInit = function () {
        this.viewConfig = new __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewConfig__["a" /* JobsBasicViewConfig */]();
    };
    JobsBasicViewComponent.prototype.ngOnDestroy = function () {
        console.log('Llamada a ngOnDestroy.');
        if (!this.subscription != null) {
            console.log('Llamada a ngOnDestroy.');
            this.subscription.unsubscribe();
        }
    };
    /**
     * Starts load of jobs status
     * @param url
     */
    JobsBasicViewComponent.prototype.initLoadJobsStatus = function (url) {
        var _this = this;
        this.jenkinsService.getJobsStatus(url).subscribe(function (jobsModelAux) { return _this.jobsModel = jobsModelAux; }, function (error) { return console.log('Error retriving data'); });
        /* Starts the polling configuration */
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].interval(this.viewConfig.pollingIntervalInMilSecond);
        this.subscription = this.timer
            .subscribe(function () {
            _this.jenkinsService.getJobsStatus(url).subscribe(function (jobsModelAux) { return _this.jobsModel = jobsModelAux; }, function (error) { return console.log('Error retriving data'); });
        });
        /* Ends the polling configuration */
    };
    /**
     * Sets the number of columns to the view
     */
    JobsBasicViewComponent.prototype.setColumnsLayout = function (numColumnsSelected) {
        this.viewConfig.classColumn = 'columns-' + numColumnsSelected;
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
    };
    /**
     *
     * @param errorMesage
     */
    JobsBasicViewComponent.prototype.unsuscribePrevious = function (errorMesage) {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    };
    return JobsBasicViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], JobsBasicViewComponent.prototype, "urlJenkins", void 0);
JobsBasicViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'jobsBasicView',
        template: __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicView.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__["a" /* JenkinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__["a" /* JenkinsService */]) === "function" && _a || Object])
], JobsBasicViewComponent);

var _a;
//# sourceMappingURL=jobsBasicView.component.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicView.model.ts":
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

//# sourceMappingURL=jobsBasicView.model.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicViewConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewConfig; });
/**
 * Created by frdiaz on 15/12/2016.
 */
var JobsBasicViewConfig = (function () {
    function JobsBasicViewConfig() {
        this.classColumn = 'columns-1';
        this.pollingIntervalInMilSecond = 5000;
    }
    return JobsBasicViewConfig;
}());

//# sourceMappingURL=jobsBasicViewConfig.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map