<!DOCTYPE html>
<html>
<head>
    <title>Custom Auth in Laravel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-light navbar-expand-lg mt-4 " style="background-color: #e3f2fd;">
    <div class="container w-100 p-0">
        <a class="navbar-brand ms-3" href="#"> Tú Anh </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('signup') }}">Signup</a>
                    </li>
                @else
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('sign-out') }}">Logout</a>
                    </li>
                @endguest
            </ul>G
        </div>
    </div>
</nav>
@yield('content')
</body>
</html>
