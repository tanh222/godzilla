<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    <link href="css/app.css" rel="stylesheet"/>
    <!-- Styles -->


<body>
@extends('layouts.master')
@section('content')
    <div class="container">
            <h1 class="name"> Login </h1>
            <form method="POST" action="{{ route('login.custom') }}">
            <div>
                @csrf
                <label for="email"> Email </label>
                <input type="text" id="email" placeholder="Enter email" class="form-control" name="email" required>
                @if ($errors->has('email'))
                    <span class="text-danger">{{ $errors->first('email') }}</span>
                @endif
            </div>

            <div>
                <label for="password"> Password </label>
                <input type="password" id="password" placeholder="Enter password" class="form-control" name="password" required >
                @if ($errors->has('password'))
                    <span class="text-danger">{{ $errors->first('password') }}</span>
                @endif
            </div>

            <div>
                <input class="form-check-input" type="checkbox" name="remember"> Remember password
            </div>
            <button type="submit" class="button" name='login'> Login </button>
            <span> Don't you have account <a href="http://localhost/Godzilla-TTAnh/public/signup"> sign up </a></span>

        </form>

    </div>


@endsection
</body>
</html>

