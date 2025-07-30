# RingtailDE-Website
This website built with Angular holds info related to my game, Ringtail Definitive Edition

dasparijat.github.io/RingtailDE-Website/

# Changelog
## 7/26/25
- Updated game widget.
- Updated text above direct itch.io link.
- Updated widget to itch page.
- Updated README, removing plan section.

## 7/25/25
- Added proper thumbnail for game widget.
- All clickable things will now turn the cursor into a pointer.
- Added most recent link to itch version of Ringtail DE.
- Created docs for github pages
- Moved all angular app code under root
- Imported fonts via @font-face
- Added deploy script to package.json

## 7/24/25
- Added 5 gifs to be displayed as screenshots
- Added description for each gif, as well as compressing them by size so they don't lag the page as much.
- Reshaped how screenshots/gifs are displayed
- Renamed screenshots to gifs/gameplay gifs (Only on visible text, not in code)
- Made game widget it's own component, so that way it's easier to hide it/access it via code (planned).
- Game widget now displays thumbnail that has to be clicked in order to start up game on web. Done to prevent the game from automatically booting up when the user opens the site.

## 7/23/25
- Added itch.io widget to access component, 
replacing the old buttons.
- Added extra assets into public folder.
- Embedded Ringtail DE itself into the access component.
- Made lighter colored components have menu background2 as their background instead.
- Redone thumbnail component to just show logo with no animation.
- Moved summary section to be under thumbnail, and added an actual summary.
- Header buttons are now more flexible, spaced out via percentage rather than pixels.

## 7/21/25
- Added new images for thumbnail component
- Added new images for screenshots (testing and actual screenshots)

## 7/20/25
- Refactored CSS files to use color variables in styles.css.
- Changed color palette of website to have a more orange tint, and have the text color be closer to the color of the logo itself.
- Changed the background image to fit the new color palette

## 7/19/25
- Changed footer text and implementation of links

## 7/18/25
- Stylized feedback component, similar header to screenshot component.
- Under feedback, added imbeded google form.
- Background image is fixed in place.
- Created and stylized footer, which includes links to my linkedin and github profile.

## 7/17/25
- Fixed issue of header buttons going to middle of section rather than top of section. The issue was the direct href links which conflicted with any code trying to offset the auto scroll.
- Finalizing design for screenshot-desc component, removed use of list.
- Create JSON file to hold screenshot data, then have screenshot component read data and create screenshot-desc's in a for loop.

## 7/16/25
- Refined styling for screenshot-desc component
- Hiding lore and guide elements, will be done for the second release of Ringtail
- Stylizing how the overall organizing of the sections look
- Added new home page background image (much darker)
- Added new template for thumbnail image (the sizing is gonna be the final sizing of the thumbnail)
- Fixed issue with summary section not being as wide as the others (Had to do with padding prop in sub-section class)
- Added header to access section

## 7/15/25
- Added html & TS code for screenshot-desc and screenshot section

## 7/14/25
- Added background image for whole page
- Refined thumbnail more, added better sizing and Ringtail image
- Stylized summary component
- Stylized access component, actual links will be added later.

## 7/13/25
- Reorgnized section components into two seperate types of sections (main sections accessed by header, and sub sections)
- Created lore sections
- Messing with css styling of sections (styles.css)
- Added header buttons for guide and feedback
- Added basic html for lore sub components
- Work on thumbnail styling

## 7/12/25
- Stylized header with Ringtail specific colors and font
- Replaced section names with names of actual planned sections
- Worked on having section id handled in each section components html, rather than in home comp html
- Having main sections that hold smaller sections, did this with home section so far
- Manually added OldNewspaperTypes font under public folder
- Created seperate css classes for main and sub sections

## 7/5/25
- Created sections folder
- Moved app code into home page code
- Added routes to start and home page in app.routes
- Made sections folder to hold each section of home (And connected one to home comp itself)
- Created several other sections (not yet modified, just exist)
- Created screenshot-desc comp under components (To be used in screenshot section)

## 7/4/25
- Added some RDE assets under `img` folder in `public` folder

## 7/2/25
- Created Angular project and git repo
- Created basic nav bar with links to sections of each page (used Gemini to generate base HTML & CSS)
- Created plan in README



# Angular Guide (for reference)
npm install -g @angular/cli (Downaload)
ng v (check version)
ng new [name] (create angular app)
ng new [name] --inline-style --inline-template (create angular app with some configurations)
ng serve (run local host)

ng g c header 
OR ng generate component header 
OR ng g c components/header
(header is name of component, component in the command is the name of the folder, if folder don't
exist, it makes a new folder)

ng g service [folder]/[name] 
(Creates a service, 
services are used for any functional thing
not related to UI (Like HTTP calls and data handling))

ng g directive [folder]/[name]
"ng g directive directives/highlight-completed-todo"

ng g pipe [folder]/[name]
(Creates a pipe, 
In Angular, pipes are a feature used to transform data directly within templates before it is displayed to the user. They allow for formatting, filtering, and manipulating data in a declarative way, enhancing the presentation layer of an application.)

"ng g pipe pipes/filter-todos"

ng b --output-path docs --base-href /[insert name of git folder]/

Ex. ng b --output-path docs --base-href /RingtailDE-Website/

ngOnInit - function used in component.ts that runs whenever it's initialized

if statement
@if (todoItems().length) {
  <h3>Todo List</h3>
} 

for loop
@for (todo of todoItems() | filterTodos : searchTerm(); track todo.id) {
    <app-todo-item (todoToggled)="updateTodoItem(todo)" [todo]="todo"></app-todo-item>
}
