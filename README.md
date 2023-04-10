# bowtiedfullstack.github.io

## Dependencies

- Node JS
  - Install from the [nodejs website](https://nodejs.org/en) or install using a [version manager](https://www.geeksforgeeks.org/how-to-install-and-use-nvm-on-windows/#)
- Tailwind CSS
  - With node installed, you can install Tailwind CSS from their guide [Here](https://tailwindcss.com/docs/installation)
  

## Development

With Tailwind installed, in the project folder run the command `npx tailwindcss -i ./public/css/styles.css -o ./public/css/output.css --watch`. This will look at your `styles.css` file and compile all tailwind and plain css into `output.css` which is used by the website.

Note that you do not have to use Tailwind and can use plain CSS, however the watcher still needs to be running to generate the `output.css` file.

## References

Much appreciation to @BowTiedIguana for the original repo this is based on. [bowtiediguana.github.io](https://github.com/bowtiediguana/bowtiediguana.github.io)