# Keyboard Shortcuts Workshop

A collection of exercises focused on using keyboard shortcuts in [VSCode](https://code.visualstudio.com/).

## Installation

1. Clone the repo
1. Run `npm install`

## Objectives

The objective isn't to write code; instead, you should use [keyboard shortcuts](#keyboard-shortcuts) (and an occasional mouse click) to edit the code as efficiently as possible within each exercise file, as specified by each `instructions.md`.

## Usage

1. Pick an exercise
1. Run the tests for the exercise, e.g. `npm run test 01`
1. Read the instructions and try to make the tests pass

## Structure

The exercises are located within separate directories inside [src](./src).

Each exercise directory contains three files:

- **exercise.ts** - The file you should work in
- **expected.ts** - Provides expected types for each exercise. This will give you an idea of what the `exercise` file should look like when you've finished
- **instructions.md** - Contains the tasks you need to complete

## Keyboard shortcuts

The offical [VSCode Key Bindings](https://code.visualstudio.com/docs/getstarted/keybindings) are far more in-depth. However, these are my most commonly used keyboard shortcuts.

Not all shortcuts are assigned a key binding by default, so I have indicated whether the shortcut is my custom override in the end column.

You can always search for these by using `F1`

| Description                                       | ID                                                   | Shortcut                                                                   | Custom Override |
| ------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------- | --------------- |
| Show All Commands                                 | `workbench.action.showCommands`                      | <kbd>F1</kbd>                                                              | -               |
| File Search                                       | `workbench.action.quickOpenNavigateNextInFilePicker` | <kbd>Ctrl</kbd> + <kbd>P</kbd>                                             | -               |
| Go To Symbol                                      | `workbench.action.gotoSymbol`                        | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>                          | -               |
| Go To Symbol (Globally)                           |                                                      | <kbd>Ctrl</kbd> + <kbd>P</kbd>, <kbd>#</kbd>                               | -               |
| Open Keyboard Shortcuts                           | `workbench.action.openGlobalKeybindings`             | <kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>Ctrl</kbd> + <kbd>S</kbd>             | -               |
| Open Settings                                     | `workbench.action.openSettings`                      | <kbd>Ctrl</kbd> + <kbd>,</kbd>                                             | -               |
| Toggle Terminal                                   | `workbench.action.terminal.toggleTerminal`           | <kbd>Ctrl</kbd> + <kbd>'</kbd>                                             | -               |
| View: Toggle Primary Side Bar Visibility          | `workbench.action.toggleSidebarVisibility`           | <kbd>Ctrl</kbd> + <kbd>B</kbd>                                             | -               |
| Show Search                                       | `workbench.view.search`                              | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>                          | -               |
| Show Explorer                                     | `workbench.view.explorer`                            | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>                          | -               |
| Show Extensions                                   | `workbench.view.extensions`                          | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>                          | -               |
| Move Line Up                                      | `editor.action.moveLinesUpAction`                    | <kbd>Alt</kbd> + <kbd>UpArrow</kbd>                                        | -               |
| Move Line Down                                    | `editor.action.moveLinesDownAction`                  | <kbd>Alt</kbd> + <kbd>DownArrow</kbd>                                      | -               |
| Duplicate Current Line Up                         | `editor.action.copyLinesUpAction`                    | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>UpArrow</kbd>                     | -               |
| Duplicate Current Line Down                       | `editor.action.copyLinesDownAction`                  | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>DownArrow</kbd>                   | -               |
| Jump To Start Of Line                             | `cursorHome`                                         | <kbd>Home</kbd>                                                            | -               |
| Jump To End Of Line                               | `cursorEnd`                                          | <kbd>End</kbd>                                                             | -               |
| Jump To Start Of File                             | `cursorTop`                                          | <kbd>Ctrl</kbd> + <kbd>Home</kbd>                                          | -               |
| Jump To End Of File                               | `cursorBottom`                                       | <kbd>Ctrl</kbd> + <kbd>End</kbd>                                           | -               |
| Select Everything From Cursor Until Start Of Line | `cursorHomeSelect`                                   | <kbd>Shift</kbd> + <kbd>Home</kbd>                                         | -               |
| Select Everything From Cursor Until End Of Line   | `cursorEndSelect`                                    | <kbd>Shift</kbd> + <kbd>End</kbd>                                          | -               |
| Select Everything From Cursor Until Start Of File | `cursorTopSelect`                                    | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd>                       | -               |
| Select Everything From Cursor Until End Of File   | `cursorBottomSelect`                                 | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd>                        | -               |
| Add Selection To Next Find Match                  | `editor.action.addSelectionToNextFindMatch`          | <kbd>Ctrl</kbd> + <kbd>D</kbd>                                             | -               |
| Move Last Selection To Previous Find Match        | `editor.action.moveSelectionToPreviousFindMatch`     | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>                          | Yes             |
| Toggle Case Sensitive Search                      |                                                      | <kbd>Alt</kbd> + <kbd>C</kbd>                                              | -               |
| Grow Selection Of Everything Inside A Bracket     | `editor.action.smartSelect.expand`                   | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>RightArrow</kbd>                  | -               |
| Shrink Selection Of Everything Inside A Bracket   | `editor.action.smartSelect.shrink`                   | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>LeftArrow</kbd>                   | -               |
| Change All Occurrences                            | `editor.action.changeAll`                            | <kbd>Ctrl</kbd> + <kbd>F2</kbd>                                            | -               |
| Rename A Variable/Symbol                          | `editor.action.rename`                               | Select symbol > <kbd>F2</kbd>                                              | -               |
| Create Multiple Cursors                           |                                                      | <kbd>Alt</kbd> + Click anywhere                                            | -               |
| Create Multiple Cursors                           |                                                      | Click the mouse scroll wheel and drag the mouse anywhere                   | -               |
| Add Cursor Above                                  | `editor.action.insertCursorAbove`                    | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>UpArrow</kbd>                      | -               |
| Add Cursor Below                                  | `editor.action.insertCursorBelow`                    | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>DownArrow</kbd>                    | -               |
| Add Cursor Above (Grow/Shrink)                    | `cursorColumnSelectUp`                               | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>UpArrow</kbd>   | -               |
| Add Cursor Below (Grow/Shrink)                    | `cursorColumnSelectDown`                             | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>DownArrow</kbd> | -               |
| Go To Definition                                  | `editor.action.revealDefinition`                     | <kbd>F12</kbd>                                                             | -               |
| Go To Line/Column                                 | `workbench.action.gotoLine`                          | <kbd>Ctrl</kbd> + <kbd>G</kbd>                                             | -               |
| Find All References                               | `references-view.findReferences`                     | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F12</kbd>                         | -               |
| Show Quick Fix Suggestions                        | `problems.action.showQuickFixes`                     | <kbd>Ctrl</kbd> + <kbd>.</kbd>                                             | -               |
| Transform To Upper Case                           | `editor.action.transformToUppercase`                 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>U</kbd>                            | Yes             |
| Transform To Lower Case                           | `editor.action.transformToLowercase`                 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd>                            | Yes             |
| Transform To Camel Case                           | `editor.action.transformToCamelcase`                 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd>                            | Yes             |
| Transform To Title Case                           | `editor.action.transformToTitlecase`                 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>                            | Yes             |
| Transform To Snake Case                           | `editor.action.transformToSnakecase`                 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd>                            | Yes             |
| Transform To Kebab Case                           | `editor.action.transformToKebabcase`                 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd>                            | Yes             |
| Change Document Langauge Mode                     | `workbench.action.editor.changeLanguageMode`         | <kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>M</kbd>                               | -               |
