# Angular Guide (for reference)
## Installation & Setup
npm install -g @angular/cli (Downaload)
ng v (check version)
ng new [name] (create angular app)
ng new [name] --inline-style --inline-template (create angular app with some configurations)

## Run local host
ng serve (run local host)

## Create components
ng g c header 
OR ng generate component header 
OR ng g c components/header
(header is name of component, component in the command is the name of the folder, if folder don't
exist, it makes a new folder)

## Create service
ng g service [folder]/[name] 
(Creates a service, 
services are used for any functional thing
not related to UI (Like HTTP calls and data handling))

## Create directive
ng g directive [folder]/[name]
"ng g directive directives/highlight-completed-todo"

## Pipelines
ng g pipe [folder]/[name]
(Creates a pipe, 
In Angular, pipes are a feature used to transform data directly within templates before it is displayed to the user. They allow for formatting, filtering, and manipulating data in a declarative way, enhancing the presentation layer of an application.)

"ng g pipe pipes/filter-todos"

## Export / Build out in Docs
ng b --output-path docs --base-href /[insert name of git folder]/

Ex. ng b --output-path docs --base-href /RingtailDE-Website/

## Code References
ngOnInit - function used in component.ts that runs whenever it's initialized

if statement
@if (todoItems().length) {
  <h3>Todo List</h3>
} 

for loop
@for (todo of todoItems() | filterTodos : searchTerm(); track todo.id) {
    <app-todo-item (todoToggled)="updateTodoItem(todo)" [todo]="todo"></app-todo-item>
}