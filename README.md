# Milestone Project 2 for Fullstack Web Developer Course

This website displays a graphical breakdown of Care Quality Commision (CQC) data from the United Kingdom.
 
## UX
 
My initial idea for this project was a series of 5 graphs with 2 being along the top and 3 along the bottom of the screen, however after altering the CQC data, the amount of columns left with data made it impractical to follow this initial design. Following on from this I decided on one dynamic chart, that can change to show the majority of possible combinations. Because by default the d3 charting library is not responsive, I decided to actually create a column chart on mobile devices, this contains the same information as the initial bar chart, but is better adapted for mobile views.

For the color scheme, I decided to use a third party site for the colors, since the main framework used in this project is bootstrap 4.

### User stories

1) I want to see all cqc records within my local council (Cambridgeshire)
2) I am a user who wants to see how many ambulance organisations are within the United Kingdom
3) I am a user who wants to see a regional breakdown of services.

## Features

### Existing Features
- Custom A-Z list
-- Allows the user to search for their council by their first letter of the councils name, this is implemented in the [utils.js](/assets/js/utils.js) file

- Row chart on mobiles
-- Allows the data to be easily viewed on mobile devices, since the row chart displays the data better on small screen sizes (See the testing section for screenshots)

### Features Left to Implement
- Responsive svg's
-- While I could have added in code to make the graphs responsive, I found an interesting bug where the svg viewbox would not increase once the graphs had changed from the barchart (On the desktop site) to the rowchart (On the mobile site) and back again,  

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML5](https://www.w3.org/standards/webdesign/htmlcss)
    - **HTML5** is the basic building language of all websites, it allows for structure 
- [CSS3](https://www.w3.org/standards/webdesign/htmlcss#whatcss)
    - **CSS 3** is used to describe web pages, via color, font and other styling. In the project it is used for styling the elements on the page.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Bootstrap v3.3](https://getbootstrap.com/docs/3.3/)
    - The project uses **Bootstrap** for the navbar functionality, along with making the images responsive and responsive visibility classes. In addtion it provides the 'grid' functionality for layout purposes.
- [SASS](http://sass-lang.com/) - **SASS** was used to add extra functionality to CSS, it allows for nested statements to be used, which in turn made the files easier to read.
- [Jasmine](https://jasmine.github.io/) - **Jasmine** was used for the automated testing

## Testing

### Code Validation

The table below shows the various validators used and there results

| Language being tested  	| Validator Used                       	| Result 	| Notes                                                                                   	|
|------------------------	|--------------------------------------	|--------	|-----------------------------------------------------------------------------------------	|
| HTML                   	| https://validator.w3.org/            	| PASS   	| https://validator.w3.org/nu/?doc=https%3A%2F%2Flowe54.github.io%2Fmilestone2_project%2F 	|
| CSS                    	| https://jigsaw.w3.org/css-validator/ 	| PASS   	| Only tested the [main.css](https://lowe54.github.io/milestone2_project/assets/css/main.css) file, since the only other one present was bootstrap's css     	|
| Javascript - Graphs.js 	| https://jshint.com/                  	| PASS   	| See below section for results and notes                                                 	|
| Javascript - Utils.js  	| https://jshint.com/                  	| PASS   	| See below section for results and notes                                                 	|

#### Graphs.js results

[graphsresult]: readme_images/graphs_js_result.png
[utilsresult]: readme_images/utils_js_result.png

![graphs.js result][graphsresult]


**NOTE:** The `queue`, `d3`, `dc` and `crossfilter` parameters are used by third-party libraries, which are used to draw the graph(s) present in this project

The `removeexcessticks`, `resizeButtons`, `scrollButtons` are functions held in the Utils.js file
The `setView`, `filterRowChart` and `resetChart` are used variables set as functions within this file. They are called from the index.html page itself 

#### Utils.js - Results

![utils.js result][utilsresult]

**NOTE: These are all functions within the js file**

***

### Automated Testing

I have performed automated testing on the Utils.js file, the results can be see [here](https://lowe54.github.io/milestone2_project/tests?random=false)

The table below explains what each of the tests checked for

| Test Number 	| Sentence within the tests                                                            	| What is it testing for?                                                                                        	|
|-------------	|--------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------	|
| 1           	| Contains 2 functions                                                                 	| Checks to see if the 2 functions are defined                                                                   	|
| 2           	| If the current height is 42 and the next elements height is  40, it should return 42 	| Checks the evaluator to see if it returns the correct number, in this case 42                                  	|
| 3           	| If the current height is 18 and the next elements height is  28, it should return 28 	| Checks the evaluator to see if it returns the correct number, in this case 28                                  	|
| 4           	| Should have a string                                                                 	| Checks to see if the 'string' variable has a typeOf 'string'                                                   	|
| 5           	| that should contain "abcdefghijklmnopqrstuvwxyz"                                     	| Checks the content of the string to confirm that it contains the alphabet                                      	|
| 6           	| and should then split this into an array which should exist                          	| Checks to see if the array that should be generated by '.split('')' exists                                     	|
| 7           	| and have a length of 26                                                              	| Checks to confirm the length of the array, anything other than 26 and it does not contain the correct alphabet 	|

### Manual Testing

In addition to the automated testing above, all of the click functionality needed to be tested manually, the table below shows what was tested, the expected result and what actually happened, with notes added if changes were needed.

| Test Number 	| Section of the site                                                                                        	| What Should Happen                                                                                      	| What Actually Happened                                     	| Actions to Take (If Any)                                                                         	|
|-------------	|------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------	|------------------------------------------------------------	|--------------------------------------------------------------------------------------------------	|
| 1           	| Chart Filtering - Clicking on 'East Midlands'                                                              	| Chart should change to show service types for the East Midlands region                                  	| Chart shows service types for east midlands                	| N/A                                                                                              	|
| 2           	| Chart Filtering - Clicking on 'East' after performing test #1                                              	| Chart should change to show service types for the East region                                           	| Chart shows service types for the east region              	| N/A                                                                                              	|
| 3           	| Dimension Change - Clicking on 'Service Types' in the navbar                                               	| Chart should not change from current chart, buttons on left should change to show the service type list 	| Chart stays the same, buttons now show service types       	| N/A                                                                                              	|
| 4           	| Chart Filtering - Clicking on 'Ambulances' after test #3                                                   	| Chart should change to show the number of 'Ambulance' services per 'Region'                             	| Chart shows ambulance services per region                  	| N/A                                                                                              	|
| 5           	| Chart Filtering - Clicking on 'Hospital' after test #4                                                     	| Chart should change to show the number of 'Hospital' services per 'Region'                              	| Chart changes to show # of Hospital services per region    	| N/A                                                                                              	|
| 6           	| Dimension Change - Clicking 'Local Authorities' in the navbar                                              	| Chart should not change from current chart, buttons on left should change to show an A-Z list           	| Chart does not change and buttons go to A-Z list           	| N/A                                                                                              	|
| 7           	| A-Z Filtering - Clicking on 'A'                                                                            	| Nothing should happen as no councils within the data start with'A'                                      	| Nothing happened                                           	| N/A                                                                                              	|
| 8           	| A-Z Filtering - Clicking on 'C'                                                                            	| Buttons on left should change to show all councils starting with 'C'                                    	| Buttons changed                                            	| N/A                                                                                              	|
| 9           	| A-Z Filtering - Clicking on 'Back' button after test #8                                                    	| Buttons on left should revert to the A-Z list                                                           	| Buttons reverted to A-Z list                               	| N/A                                                                                              	|
| 10          	| Chart filtering - Click on 'Reset' button                                                                  	| Buttons on left should stay the same, however chart should reset to initial chart.                      	| Buttons stayed the same and chart reset                    	| N/A                                                                                              	|
| 11          	| Screen size change - Desktop to Mobile                                                                     	| Chart should convert to Row Chart format                                                                	| Chart converted to row chart format, did not scale however 	| SVG's are not responsive at the moment, see the 'Features left to implement' section for details 	|
| 12          	| Screen size change - Mobile to Desktop                                                                     	| Chart should convert to Bar Chart format                                                                	| Chart converted to bar chart format, did not scale however 	| SVG's are not responsive at the moment, see the 'Features left to implement' section for details 	|
| 13          	| User Stories - I want to see all cqc records within my local council (Cambridgeshire)                      	| Should be able to get the service list via Local Authorities -> C -> Cambridge                          	| User had to take 3 clicks to find the information          	| N/A                                                                                              	|
| 14          	| User Stories - I am a user who wants to see how many ambulance organisations are within the United Kingdom 	| Should be able to get the list via Service Types -> Ambulances                                          	| User took 2 click - service types -> Ambulances            	| N/A                                                                                              	|
| 15          	| User Stories - I am a user who wants to see a regional breakdown of services.                              	| Tapping on Initial region                                                                               	| User took 1 click                                          	| N/A                                                                                              	|
### How it Displays
#### Google Chrome
![Google Chrome - Desktop][chrome]
***
![Google Chrome - Mobile][chromemobile]

#### Firefox
![Firefox - Desktop][firefox]
***
![Firefox - Mobile][firefoxmobile]

#### Internet Explorer

![Internet Explorer - Desktop][ie]
***
![Internet Explorer - Mobile][iemobile]

[chrome]: readme_images/MS2P_Chrome.png
[ie]: readme_images/MS2P_Internet_Explorer.png
[firefox]: readme_images/MS2P_Firefox.png
[chromemobile]: readme_images/MS2P_Chrome_Mobile.png
[firefoxmobile]: readme_images/MS2P_Firefox_Mobile.png
[iemobile]:  readme_images/MS2P_Internet_Explorer_Mobile.png
## Deployment

The site is available to view via [here](https://lowe54.github.io/milestone2_project/)

The following steps were made in order to deploy the project 
### Github Deployment
- In a terminal, the git repository was initiated via the `git init` command
- The repository was linked to a .git file on github via
    - `git remote add origin https://github.com/Lowe54/milestone2_project.git`
    - `git push -u origin master`
    
- After each change, the following commands were used to push the changes to the git repository
    - `git add *` - This adds all changed files to staging
    - `git commit -m "MESSAGE HERE"` - Commits the work with a brief message as to what has changed
    - `git push` - This pushes the work to the git repository, after entering your github username and password


### Github Cloning
- In order to clone the github repository, type the following command in a terminal
    - `git clone https://github.com/Lowe54/milestone2_project`
- If you wish to change the default directory to where the project is checked out to, use the following command 
    - `git clone https://github.com/Lowe54/milestone2_project *FolderName*`

### Style Changing

The styles of this site are in SASS (.scss) format, in order to change the styles you will need to enter the following command into a terminal.

If you get an `command not recognised` error, please follow the steps [here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass)

`sass --watch assets-src/scss/:assets/css`

## Credits

### Content
All data shown here has been provided by the CQC (Care Quality Commission), available at [https://www.cqc.org.uk/about-us/transparency/using-cqc-data](https://www.cqc.org.uk/about-us/transparency/using-cqc-data)

Contains public sector information licensed under the [Open Government Licence v3.0](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)

The color scheme was aquired from 'bootswatch', which is a free color scheme repository for bootstrap [Color theme 'Minty'](https://bootswatch.com/minty/)

### Acknowledgements

- I thank my Dad for agreeing to be the User for testing the User stories defined within this project
