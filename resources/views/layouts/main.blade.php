<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>Godzilla | Dashboard &amp; WebApp Template</title>

    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link href="{{ asset('css/perfect-scrollbar.css') }}" rel="stylesheet">
    <link href="{{ asset('css/theme.css') }}" rel="stylesheet">

</head>
<body>

<!-- ===============================================-->
<!--    Main Content-->
<!-- ===============================================-->
<main class="main" id="top">
    <div class="container" data-layout="container">
        @include('layouts.nav')

        <div class="content">
            @yield('content')
        </div>
    </div>
</main>

<script src="{{ asset('js/jquery.min.js') }}"></script>
<script src="{{ asset('js/popper.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/perfect-scrollbar.js') }}"></script>
<script src="{{ asset('js/theme.js') }}"></script>

@yield('script')
</body>
</html>
