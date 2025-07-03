# RingtailDE-Website
This is the website that features stuff related to the game Ringtail Definitive Edition

# Changelog
(7/2/25) - Created angular project and git repo

# Angular Commands (for reference)
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