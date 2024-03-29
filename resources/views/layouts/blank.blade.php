<!DOCTYPE html>
<html lang="en-US" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>Godzilla</title>
    <meta name="theme-color" content="#ffffff">


    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    {{--    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">--}}
    <!--    <link href="../../assets/lib/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet">-->
    <link href="{{ asset('css/theme.css') }}" rel="stylesheet">

</head>


<body>

<!-- ===============================================-->
<!--    Main Content-->
<!-- ===============================================-->
<main class="main" id="top">
    <div class="container" data-layout="container">
        <div class="row flex-center min-vh-100 py-6">
            <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <a class="d-flex flex-center mb-4" href="#">
                    <img class="mr-2" src="{{ asset('img/logo/falcon.png') }}" alt="" width="58"/>
                    <span class="text-sans-serif font-weight-extra-bold fs-5 d-inline-block">falcon</span>
                </a>
                @yield('content')
            </div>
        </div>
        <div>
            <td class="py-2 align-middle white-space-nowrap">
                <div class="dropdown text-sans-serif">
                    <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                            type="button" id="customer-dropdown-4" data-toggle="dropdown"
                            data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                        <span class="fas fa-ellipsis-h fs--1"></span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right border py-0"
                         aria-labelledby="customer-dropdown-4">
                        <div class="bg-white py-2">
                            <a class="dropdown-item" href="#!">Edit</a>
                            <a class="dropdown-item text-danger" href="#!">Delete</a></div>
                    </div>
                </div>
            </td>
        </div>
    </div>
</main>
<!-- ===============================================-->
<!--    End of Main Content-->
<!-- ===============================================-->


<!-- ===============================================-->
<!--    JavaScripts-->
<!-- ===============================================-->


</body>

</html>
