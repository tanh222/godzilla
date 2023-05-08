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
</head>
<body>
@extends('layouts.master')
@section('content')
    <div class="container">

            <h1 class="name"> Signup </h1>
            <form method="POST" action="{{ route('signup.custom') }}">

        <div>
            @csrf
            <label for="name"> Username </label>
            <input type="text" id="name" placeholder="Enter name" class="form-control" name="name"
                   required autofocus>
            @if ($errors->has('name'))
                <span class="text-danger">{{ $errors->first('name') }}</span>
            @endif
        </div>

        <div>
            <label for="password"> Password </label>
            <input type="password" id="password" placeholder="Enter password" class="form-control" name="password"
                   required>
            @if ($errors->has('password'))
                <span class="text-danger">{{ $errors->first('password') }}</span>
            @endif
        </div>

        <div>
            <lable for="confirm_password"> Retype password</lable>
            <input type="text" id="confirm_password" placeholder="Enter retype password" class="form-control"
                   name="retype" required>
            @if ($errors->has('password'))
                <span class="text-danger">{{ $errors->first('password') }}</span>
            @endif
        </div>
        <div>
            <lable for="email"> Email</lable>
            <input type="email" placeholder="Enter email" class="form-control" name="email"
                   required autofocus>
            @if ($errors->has('email'))
                <span class="text-danger">{{ $errors->first('email') }}</span>
            @endif
        </div>
        <div>
            <label for="address">Address</label><br>
            <input type="text" id="address" class="form-control" placeholder="Enter address" name="address">
        </div>
        <div>
            <label for="phone_number"> Cellphone </label><br>
            <input type="number" id="phone_number" class="form-control" placeholder="Enter cellphone"
        </div>
        <button type="submit" class="button">Sign up</button>
        <span>If you already have an account <a href="http://localhost/Godzilla-TTAnh/public/login"> Log in </a></span>
        </form>
    </div>
@endsection
</body>
</html>

