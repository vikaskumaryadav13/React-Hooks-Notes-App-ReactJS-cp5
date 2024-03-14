In this project, let's build a **Notes App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js-hooks/notes-app-output.gif" alt="notes app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js-hooks/notes-app-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Empty Notes View](https://assets.ccbp.in/frontend/content/react-js-hooks/notes-app-empty-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Notes View](https://assets.ccbp.in/frontend/content/react-js-hooks/notes-app-notes-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the title and note inputs should be empty and [Empty Notes View](https://assets.ccbp.in/frontend/content/react-js-hooks/notes-app-empty-lg-output.png) should be displayed
- When non-empty values are provided for the title and notes and the **Add** button is clicked,
  - A new note item should be added to the list of notes with provided details

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js-hooks/notes-app-component-structure-breakdown.png" alt="notes app component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Notes/index.js`
- `src/components/Notes/styledComponents.js`
- `src/components/NoteItem/index.js`
- `src/components/NoteItem/styledComponents.js`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Styled Components** should be used for styling purposes
- HTML input element for the title should have the placeholder as **Title**
- HTML textarea element for notes should have the placeholder as **Take a Note...**
- **Bree Serif** should be applied as `font-family` for **Notes** heading

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/hooks/empty-notes-img.png](https://assets.ccbp.in/frontend/hooks/empty-notes-img.png) alt should be **notes empty**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #4c63b6; width: 150px; padding: 10px; color: white">Hex: #4c63b6</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #d8d8d8; width: 150px; padding: 10px; color: black">Hex: #d8d8d8</div>
<div style="background-color: #aab8c8; width: 150px; padding: 10px; color: black">Hex: #aab8c8</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<br/>
</details>

<details>
<summary>Font-families</summary>

- Roboto
- Bree Serif

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
