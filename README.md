Platformless
============

This is how the repo will be structured:

1. `game.html`: The main game file, open to run game.
2. `bower_components`: Where some libraries acquired through bower are kept.
3. `js`: Where all the game logic is stored(JS stands for JavaScript).
4. `img`: Where all the visual assets are located.
  * Files will be organised by which entity uses the images
  like a folder per robot or for the platforms or mechanisms
5. `level`: Where all the level files are kept.(DEV STAGE ONLY)
6. `son`: Where all the aural files are placed.
  * Files will be organised by which entity uses the audio
  like a folder per robot or for the platforms or mechanism




  HOW TO STOP AUTOMATIC PUSHING TO GH-PAGES:

  REMOVE
  "
  push = refs/heads/master:refs/heads/gh-pages
  push = refs/heads/master:refs/heads/master

  "
FROM .git/config
