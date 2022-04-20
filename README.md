# music-player-assignment
 A learning assignment for Angular based on https://github.com/momentum-retail/DVT-music-search/

## Steps / Recipe
Install Angular with npm install @angular/cli
Create project with ng new music-player-assignment (Select SCSS as styling method)
Install Angular Material with npm install --save angular/material2-builds angular/cdk-builds angular/animations-builds amd then ng add @angular/material
Upload to GitHub repo
Add Nav component ng generate @angular/material:navigation nav
Modify Nav to appear on home page 
    edit app.component.html <app-nav></app-nav>
    add routing const routes: Routes = [{ path: 'dashboard', component: DashComponent }] to app-routing.module.ts
Add Dashboard component ng generate @angular/material:dashboard dash
Add Deezer service with ng generate service deezer
    Add Deezer api url to environment.ts and to app.module.ts Providers
    Generate type interfaces for Deezer API using Postman and a type tool eg. http://json2ts.com/
    Add api calls for Album, Artist
    Add search api call for Artist

## Running locally
Run the app by npm run start
Browse to http://localhost:4200/
