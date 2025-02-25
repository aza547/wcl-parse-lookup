# Preview

![](https://i.imgur.com/aBViu4I.png)
![](https://i.imgur.com/QhCcgkK.png)

# How To Run?
> **Note:** I developed this on Windows. I've not tried on any other OS. Might just work, but recommend also doing this on Windows.
- Clone the repository: `git clone https://github.com/aza547/wcl-parse-lookup.git`.
- Update `$apiKey` in `LookupController.php` with a real API key.
- Install Laravel, PHP, Composer (I think Herd does all that for free) and Node.
- Run some commands to setup the checkout:
  - `composer install`
  - `npm install`
  - `composer run-script post-root-package-install`
  - `composer run-script post-create-project-cmd`
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
- I've never used Laravel or PHP before so I started with a bootcamp: https://bootcamp.laravel.com/inertia/installation.
- I was a bit overwhelmed by all the stuff that the startup guide created for me automatically. I've deleted some of the stuff I think is now unused, but might have missed some.
- Deliberately put the request to the WCL API on the backend given the authenticated nature.
- I grabbed some realms from the WoW API and hardcoded them for the sake of simplicity. Same reasoning for only adding US and EU regions.
- A few libraries that were way overkill in here that I was wanting to play with for a while. So I did. 
- I installed ESLint / Prettier for linting the JS code. I disabled a few rules I couldn't be bothered handling properly.
- I've never used a PHP linter so I didn't bother trying to get something, suspect some of my PHP syntax could be tidier.
- I've put no effort into writing any unit tests. 

# Versions
For reference...

```
$ php --version    
PHP 8.4.3 (cli) (built: Jan 15 2025 11:02:41) (NTS Visual C++ 2022 x64)
Copyright (c) The PHP Group
Zend Engine v4.4.3, Copyright (c) Zend Technologies
    with Zend OPcache v8.4.3, Copyright (c), by Zend Technologies
```

```
$ node --version       
v22.12.0
```