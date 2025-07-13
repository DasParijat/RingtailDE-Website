# RingtailDE-Website
This is the website that features stuff related to the game Ringtail Definitive Edition


# Plan
-Have website open with one page, then it opens to the main page, where all the content is
-Have general green/white/yellow colors (Earthy)
-Using fonts OldNewspaperTypes and Bahnschrift


# Sections
## HOME
-1st section is Ringtail Thumbnail
-2nd section is links/download to the game itself
-3rd section is the basic description of the game

## SCREENSHOTS
-4th section is several screenshots, alongside mini descriptions telling game mechanics (player side)

## LORE
-5th section is on Ringtail Lore
-6th section is on Oswald Lore
-7th section is on Ringtail Trilogy Lore (Nefarions and Brothers)

## GUIDE
-8th section is mini guide on ringtail (attacks, minitails, and bullets)

## FEEDBACK
-9th section has link/qr code to feedback form
-10th section is the end page, thanking the player


# Changelog
## 7/13/25
- Reorgnized section components into two seperate types of sections (main sections accessed by header, and sub sections)

## 7/12/25
- Stylized header with Ringtail specific colors and font
- Replaced section names with names of actual planned sections
- Worked on having section id handled in each section components html, rather than in home comp html
- Having main sections that hold smaller sections, did this with home section so far
- Manually added OldNewspaperTypes font under public folder

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

ngOnInit - function used in component.ts that runs whenever it's initialized

if statement
@if (todoItems().length) {
  <h3>Todo List</h3>
} 

for loop
@for (todo of todoItems() | filterTodos : searchTerm(); track todo.id) {
    <app-todo-item (todoToggled)="updateTodoItem(todo)" [todo]="todo"></app-todo-item>
}