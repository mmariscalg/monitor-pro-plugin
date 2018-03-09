package org.jenkinsci.plugins.monitorpro;

import hudson.Extension;
import hudson.PluginWrapper;
import hudson.model.Action;
import hudson.model.Describable;
import hudson.model.Api;
import hudson.model.Descriptor;
import hudson.util.HttpResponses;
import jenkins.model.Jenkins;
import net.sf.json.JSONObject;

import org.kohsuke.stapler.HttpResponse;
import org.kohsuke.stapler.StaplerRequest;
import org.kohsuke.stapler.export.Exported;
import org.kohsuke.stapler.export.ExportedBean;

/**
 * Display the MonitorPro action on each view.
 * 
 * @author Francisco R Díaz
 */
@ExportedBean
public class MonitorProViewAction implements Action, Describable<MonitorProViewAction> {

	public final static String SHORT_NAME = "monitor-pro";
	
	public final static String DISPLAY_NAME = "Monitor Pro";
	
	public Api getApi() {
		return new Api(this);
	}
	
	public HttpResponse doProve(){
		System.out.println("PRUEBA");
		return HttpResponses.redirectTo("http://www.google.es");
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see hudson.model.Action#getDisplayName()
	 */
	public String getDisplayName() {
		return DISPLAY_NAME;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see hudson.model.Action#getIconFileName()
	 */
	public String getIconFileName() {
		return "monitor.png";
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see hudson.model.Action#getUrlName()
	 */
	public String getUrlName() {
		return SHORT_NAME;
	}

	
	@Exported
	public String getVersion() {
		return getPluginWrapper().getVersion();
	}
	
	public PluginWrapper getPluginWrapper() {
		return Jenkins.getInstance().getPlugin(SHORT_NAME).getWrapper();
	}
	
	@Exported
	public String getRootUrl() {
		return Jenkins.getInstance().getRootUrl();
	}
	
	@Override
	public MonitorProViewActionDescriptor getDescriptor() {
		return MonitorProViewActionDescriptor.class.cast(Jenkins.getInstance().getDescriptorOrDie(getClass()));
	}
	

	@Extension
	public static final class MonitorProViewActionDescriptor extends Descriptor<MonitorProViewAction> {

		
		@Override
		public String getDisplayName() {
			return DISPLAY_NAME;
		}

		@Override
		public boolean configure(StaplerRequest req, JSONObject json) throws FormException {
			req.bindJSON(this, json.getJSONObject("monitorpro"));
			save();
			return true;
		}
		
	}

}
