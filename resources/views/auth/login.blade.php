<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
    <!-- Styles -->


<body>

<div class="container">
    <h1 class='name'> Login </h1>
    <form>
        <div>
            <label for="username"> Username </label>
            <input type="text" id="username" class="form-control" placeholder="Enter Username " name="Username">
        </div>
        <div>
            <label for="password"> Password </label>
            <input type="password" id="password" class="form-control" placeholder="Enter Password" name="password">
        </div>
        <div>
            <label class="form-check-label"></label>
            <input class="form-check-input" type="checkbox" name="remembe"> Remember password
        </div>
        <button type="submit" class="button" name="login">Login</button>
        <span> Don't you have account <a href="{{ route ('auth.signup') }}"> Sign_up </a></span>

    </form>
</div>
</body>
</html>

