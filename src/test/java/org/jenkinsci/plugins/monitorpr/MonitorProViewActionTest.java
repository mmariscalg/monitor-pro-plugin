package org.jenkinsci.plugins.monitorpr;

import static org.junit.Assert.assertEquals;

import org.jenkinsci.plugins.monitorpro.MonitorProViewAction;
import org.junit.Before;
import org.junit.Test;

public class MonitorProViewActionTest {
	
	private MonitorProViewAction monitorProViewAction; 
	private final static String DISPLAY_NAME ="Monitor Pro";
	
	@Before
	public void init(){
		monitorProViewAction = new MonitorProViewAction();
	}

	@Test
	public void getDisplaNameTest(){
		String displayName = monitorProViewAction.getDisplayName();
		assertEquals(displayName, DISPLAY_NAME);
	}
}
