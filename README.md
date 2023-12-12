This is my final project for the Subject Network Based Application Development based on Angular, HTML and CSS . I have used Mongo DB as database.


Working:

Since you will be new to this website, register to login to the website:

When you login the website, you will visit the home page where you will be welcomed. There are 3 more pages in the navigation bar, that one can switch into. The first one is Dashboard where 3 charts are shown: 

1. The first chart is the budget pie chart, that shows the budget of every category once you add them.
2. The second chart is budget chart vs expense chart, it is a bar comparison chart.
3. The third one is monthly expense chart which tells you the total expense you have spent on that month.( It changes on monthly basis and tracks the month on which month and date you add the expense)

Then we have budget page, Here we can Add Budget and Select a Category , we have to give an amount for a category let say the budget of that category has been decided. You can keep on adding budgets and a table is formed. You can also edit as well as delete a budget on your wish.

After that we will have an expenses page, here from the budget’s categories that we have added, we can take an expense amount and comment on what it is . 

As we keep on changing and updating the budget and expense , the first two charts keep on changing, for the third chart to change you have to login the next day as it calculates for a day! 

You Also have an option to logout.


Testing:

//Since in TA hours , TA told they would just consider the implementation and not if they're right or wrong

Unit Testing;

As you can see I created a component named Utesting,

in utesting.component.spec.ts

<!-- import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtestingComponent } from './src/app/utesting.component';

describe('ExampleComponent', () => {
  let component: UtestingComponent;
  let fixture: ComponentFixture<UtestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtestingComponent],
    });
    fixture = TestBed.createComponent(UtestingComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed

  // Example of testing a property
  it('should display the correct message', () => {
    fixture.detectChanges();
    const compiled =fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Utesting is working');
  });
}); -->

if we run ng test,

Output in Terminal of Unit Testing ( attached in word file)


In cypress testing,

Install cypress, open the app, creat file under integration( IT SUPPORTS ts , js files ):

code :

<!-- const { Builder } = require('selenium-webdriver');
const { Eyes, ClassicRunner, Target } = require('@applitools/eyes-selenium');

async function runTest() {
    // Initialize the Eyes SDK
    const eyes = new Eyes(new ClassicRunner());
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

    // Initialize the Selenium WebDriver
    const driver = new Builder()
        .forBrowser('chrome') // or 'firefox', 'safari', etc.
        .build();

    try {
        // Open a new browser window
        await driver.get('http://localhost:3000');

        // Start the test and set the browser's viewport size to 800x600
        await eyes.open(driver, 'My Personal Budget App', 'Home Page Test', { width: 800, height: 600 });

        // Visual checkpoint #1
        await eyes.check('Home Page', Target.window());

        // End the test
        await eyes.closeAsync();
    } finally {
        // Close the browser
        await driver.quit();

        // If the test was aborted before eyes.closeAsync() was called
        await eyes.abortAsync();
    }
}

runTest().catch(err => console.error(err)); -->



On chrome, you will see your homepage to login.


for Visual Regression Testing,

I followed:

I followed : https://applitools.com/blog/angular-cypress-visual-testing

// visual-regression.spec.js

<!-- describe('Visual Regression Test', () => {
  it('should capture screenshots', () => {
    // Visit the page you want to capture
    cy.visit('/');
    cy.percySnapshot('Home');
  });
}); -->
