# Preview

![](https://i.imgur.com/aBViu4I.png)
![](https://i.imgur.com/QhCcgkK.png)

# How To Run?
- Update `$apiKey` in `LookupController.php` with a real API key.
- Install Laravel, PHP, Composer (I think Herd does all that for free) and Node.
- Install Laravel dependencies: `composer install` - I think, not actually tested this before.
- Install Node dependencies: `npm install`.
- Create an env file: `cp .env.example .env`.
- Generate a key: `php artisan key:generate`.
- Start Laravel backend: `php artisan serve`.
- Start React frontend: `npm run dev`.


# How to Use?
- Go to the localhost address Laravel is listening on in your browser, probably `http://127.0.0.1:8000/`.
- Fill in all the fields and hit the "Go!" button. You won't be able to press it until you have put atleast semi-sensible values in.
- You be redirected to a URL like `http://localhost:8000/lookup/EU/twisting-nether/alexsmite/hps`. 
- The Laravel backend looks up the parse and returns the rendered react page (or an error page if anything went wrong).

# Requirements Met?
| Requirement | Met? | Notes |
|----------|----------|----------|
| Name   | Yes   |   |
| Class   | Yes   |    |
| Spec   | Yes   |    |
| Gear   | Yes   |    |
| Cycre's   | Yes*   |  "...also show the socket gems by themselves" - not taken literally, WowHead tooltips show the gems of all items.  |
| Link to WCL   | Yes   |    |
| Display %ile   | Yes   |    |

# Comments
- I've never used Laravel or PHP before so I started with a starter kit: https://laravel.com/docs/11.x/starter-kits.
- I was a bit overwhelmed by all the stuff that the startup guide created for me automatically. I've deleted some of the stuff I think is now unused, but might have missed some.
- Deliberately put the request to the WCL API on the backend given the authenticated nature.
- I grabbed some realms from the WoW API and hardcoded them for the sake of simplicity. Same reasoning for only adding US and EU regions.
- A few libraries that were way overkill in here that I was wanting to play with for a while. So I did. 
- I installed ESLint / Prettier for linting the JS code. I disabled a few rules I couldn't be bothered handling properly.
- I've never used a PHP linter so I didn't bother trying to get something, suspect some of my PHP syntax could be tidier.
- I've put no effort into writing any unit tests. 