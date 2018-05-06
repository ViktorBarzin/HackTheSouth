# Youtube custom playlist adder
###### Couldn't think of a better name... for now..

# What is it?

This project is a browser extension that adds the possibility of a user to choose what the next video in youtube will be.
Check the images below:

<img src="https://i.imgur.com/kEKpY0g.png" height="600" width="1100">
<img src="https://i.imgur.com/7OrPhKc.png" height="600" width="1100">

##### You can add videos in the play next area by simply dragging them there.
##### Videos left in the the play next area do persist across tabs, browser and computer restarts as they are save in the browser local storage [More about storage here](https://www.w3schools.com/html/html5_webstorage.asp)

# How do I install it?
- This is in our todo list. Currently the way you install the app is to download the "DemoApp.zip", upack it in a directory of your choice. Then you need to go to [chrome://extensions/](chrome://extensions/) where you click the "Load upacked" button and finally select the directory you where you have unzipped the zip file.
Then visit any youtube video and the "Drop songs here" section should appear on the top right of the page.

# Important notes

- Tweaking the source in any way is **strongly discouraged** unless you really know what you are doing!
- There may or may not be future improvements and updates, however, it is tested and working on **Google chrome 64bit version 64 and version 66 for linux and windows** as well as on **Mozilla Firefox 64 bit version 58**
- Since the extension reliese heavily on the youtube page, any future changes to its source would most probably make the extension crash in various ways. Currently (06 May 2018) it works as expected. We will try to keep it updated as much as we can.

# Known issues:
- Going to youtube.com and then opening a video does not load the plugin.
    - **Solution** - A) Refresh the page. or B) Visitin directly "youtube.com/watch?v=asdasd" page.
- Listening video from a youtube playlist breaks the auto play feature and the next song is from the youtube playlist rather than from the plugin videos in the queue.
- Clicking the "Show more" button shows more videos that are not draggable.

# Reporting bugs

- The project is still in alpha release (as you can tell by the fancy background of the play next area :P) so there are a lot of bugs. If you find any open an issue and be as descriptive as possible so we can reproduce the issue and fix it more easily.

# Contribute

- We are eager for user feedback and contribution. If you have any cool ideas feel free to download the source and tweak it any way you wish or submit a pull request.

- You can choose from any of the known issues and try to fix them. We love pull requests
