/*
package com.seleniumframework.customcucumber;

import cucumber.api.StepDefinitionReporter;
import cucumber.api.event.TestRunFinished;
import cucumber.api.event.TestRunStarted;
import cucumber.runner.EventBus;
import cucumber.runner.ThreadLocalRunnerSupplier;
import cucumber.runner.TimeService;
import cucumber.runner.TimeServiceEventBus;
import cucumber.runtime.*;
import cucumber.runtime.filter.Filters;
import cucumber.runtime.formatter.PluginFactory;
import cucumber.runtime.formatter.Plugins;
import cucumber.runtime.io.MultiLoader;
import cucumber.runtime.io.ResourceLoader;
import cucumber.runtime.io.ResourceLoaderClassFinder;
import cucumber.runtime.model.CucumberFeature;
import cucumber.runtime.model.FeatureLoader;
import io.cucumber.core.options.CucumberOptionsAnnotationParser;
import io.cucumber.core.options.EnvironmentOptionsParser;
import io.cucumber.core.options.RuntimeOptions;
import org.apiguardian.api.API;
import org.apiguardian.api.API.Status;
import org.junit.runner.Description;
import org.junit.runner.notification.RunNotifier;
import io.cucumber.*;
import org.junit.runners.ParentRunner;
import org.junit.runners.model.InitializationError;
import org.junit.runners.model.RunnerScheduler;
import org.junit.runners.model.Statement;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@API(
        status = Status.STABLE
)
public class SeleniumCustomCucumber extends ParentRunner<FeatureRunner> {
    private final List<FeatureRunner> children = new ArrayList();
    private final EventBus bus;
    private final ThreadLocalRunnerSupplier runnerSupplier;
    private final List<CucumberFeature> features;
    private final Plugins plugins;
    private boolean multiThreadingAssumed = false;

    public SeleniumCustomCucumber(Class clazz) throws InitializationError {
        super(clazz);
        Assertions.assertNoCucumberAnnotatedMethods(clazz);
        ClassLoader classLoader = clazz.getClassLoader();
        ResourceLoader resourceLoader = new MultiLoader(classLoader);
        RuntimeOptions annotationOptions = (new CucumberOptionsAnnotationParser(resourceLoader)).withOptionsProvider(new JUnitCucumberOptionsProvider()).parse(clazz).build();
        RuntimeOptions runtimeOptions = (new EnvironmentOptionsParser(resourceLoader)).parse(Env.INSTANCE).build(annotationOptions);
        runtimeOptions.addUndefinedStepsPrinterIfSummaryNotDefined();
        JUnitOptions junitAnnotationOptions = (new JUnitOptionsParser()).parse(clazz).build();
        JUnitOptions junitOptions = (new JUnitOptionsParser()).parse(runtimeOptions.getJunitOptions()).setStrict(runtimeOptions.isStrict()).build(junitAnnotationOptions);
        ClassFinder classFinder = new ResourceLoaderClassFinder(resourceLoader, classLoader);
        FeatureLoader featureLoader = new FeatureLoader(resourceLoader);
        FeaturePathFeatureSupplier featureSupplier = new FeaturePathFeatureSupplier(featureLoader, runtimeOptions);
        this.features = featureSupplier.get();
        this.plugins = new Plugins(classLoader, new PluginFactory(), runtimeOptions);
        this.bus = new TimeServiceEventBus(TimeService.SYSTEM);
        BackendSupplier backendSupplier = new BackendModuleBackendSupplier(resourceLoader, classFinder, runtimeOptions);
        this.runnerSupplier = new ThreadLocalRunnerSupplier(runtimeOptions, this.bus, backendSupplier);
        Filters filters = new Filters(runtimeOptions);
        Iterator var13 = this.features.iterator();

        while(var13.hasNext()) {
            CucumberFeature cucumberFeature = (CucumberFeature)var13.next();
            FeatureRunner featureRunner = new FeatureRunner(cucumberFeature, filters, this.runnerSupplier, junitOptions);
            if (!featureRunner.isEmpty()) {
                this.children.add(featureRunner);
            }
        }

    }

    public List<FeatureRunner> getChildren() {
        return this.children;
    }

    protected Description describeChild(FeatureRunner child) {
        return child.getDescription();
    }

    protected void runChild(FeatureRunner child, RunNotifier notifier) {
        child.run(notifier);
    }

    protected Statement childrenInvoker(RunNotifier notifier) {
        Statement runFeatures = super.childrenInvoker(notifier);
        return new SeleniumCustomCucumber.RunCucumber(runFeatures);
    }

    public void setScheduler(RunnerScheduler scheduler) {
        super.setScheduler(scheduler);
        this.multiThreadingAssumed = true;
    }

    class RunCucumber extends Statement {
        private final Statement runFeatures;

        RunCucumber(Statement runFeatures) {
            this.runFeatures = runFeatures;
        }

        public void evaluate() throws Throwable {
            if (SeleniumCustomCucumber.this.multiThreadingAssumed) {
                SeleniumCustomCucumber.this.plugins.setSerialEventBusOnEventListenerPlugins(SeleniumCustomCucumber.this.bus);
            } else {
                SeleniumCustomCucumber.this.plugins.setEventBusOnEventListenerPlugins(SeleniumCustomCucumber.this.bus);
            }

            SeleniumCustomCucumber.this.bus.send(new TestRunStarted(SeleniumCustomCucumber.this.bus.getTime(), SeleniumCustomCucumber.this.bus.getTimeMillis()));
            Iterator var1 = SeleniumCustomCucumber.this.features.iterator();

            while(var1.hasNext()) {
                CucumberFeature feature = (CucumberFeature)var1.next();
                feature.sendTestSourceRead(SeleniumCustomCucumber.this.bus);
            }

            StepDefinitionReporter stepDefinitionReporter = SeleniumCustomCucumber.this.plugins.stepDefinitionReporter();
            SeleniumCustomCucumber.this.runnerSupplier.get().reportStepDefinitions(stepDefinitionReporter);
            this.runFeatures.evaluate();
            SeleniumCustomCucumber.this.bus.send(new TestRunFinished(SeleniumCustomCucumber.this.bus.getTime(), SeleniumCustomCucumber.this.bus.getTimeMillis()));
        }
    }
}
*/
