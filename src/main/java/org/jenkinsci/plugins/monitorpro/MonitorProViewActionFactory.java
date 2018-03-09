package org.jenkinsci.plugins.monitorpro;

import hudson.Extension;
import hudson.model.Action;
import hudson.model.TransientViewActionFactory;
import hudson.model.View;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Francisco R Díaz
 */
@Extension
public class MonitorProViewActionFactory extends TransientViewActionFactory {

	/*
	 * (non-Javadoc)
	 * 
	 * @see hudson.model.TransientViewActionFactory#createFor(hudson.model.View)
	 */
	@Override
	public List<Action> createFor(View view) {
		List<Action> result = new ArrayList<Action>();
		result.add(new MonitorProViewAction());
		return result;
	}

}
