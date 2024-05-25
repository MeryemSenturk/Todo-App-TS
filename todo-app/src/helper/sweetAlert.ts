import Swal from "sweetalert2";

export enum SweetIcon {
  SUCCESS = "success",
}

/**
 * @description Creates a notification using Swal library and displays it to the user.
 * 
 * @param { string } msg - message or information to be displayed as the title of the
 * swal dialog box.
 * 
 * @param { SweetIcon } icon - icoinal icon to display next to the title and text in
 * the Swal fire message box.
 * 
 * @returns { Swal.fire` return value of type `void } a Swal fire dialog box with
 * customized title, text, and icon.
 * 
 * 		- `title`: A string that represents the title of the notification.
 * 		- `text`: A string that represents the message to be displayed in the notification.
 * 		- `icon`: An instance of the `SweetIcon` class, which represents the icon to be
 * displayed next to the notification message.
 * 		- `confirmButtonText`: A string that represents the text to be displayed as an
 * option in the confirmation modal for the user to interact with the notification.
 */
export const notify = (msg: string, icon: SweetIcon) =>
  Swal.fire({
    title: "Meryem Todo App!",
    text: msg,
    icon: icon,
    confirmButtonText: "Cool",
  });
