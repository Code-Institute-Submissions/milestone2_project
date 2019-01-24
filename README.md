# Milestone Project 2 for Fullstack Web Developer Course

One or two paragraphs providing an overview of your project.

Essentially, this part is your sales pitch.
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

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


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

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
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X