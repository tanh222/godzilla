@extends('layouts.blank')

@section('content')

    <div class="card">
        <div class="card-body p-4 p-sm-5">
            <div class="row text-left justify-content-between align-itemgit s-center mb-2">
                <div class="col-auto">
                    <h5> Register</h5>
                </div>
                <div class="col-auto">
                    <p class="fs--1 text-600 mb-0"> Have an account?
                        <a href="{{ route('auth.login') }}">Login</a>
                    </p>
                </div>
            </div>
            <form method="POST" action="{{ route('register.custom') }}">
                @csrf
                <div class=" form-group">
                    <input id="name" class="form-control" type="text" placeholder="First_Name" name="first_name"/>
                </div>
                <div class=" form-group">
                    <input id="name" class="form-control" type="text" placeholder="Last_Name" name="last_name"/>
                </div>
                <div class="form-group">
                    <input id="email" class="form-control" type="email" placeholder="Email address" name="email"/>
                    @if ($errors->has('email'))
                        <span class="text-danger">{{ $errors->first('email') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <input id="number" class="form-control" type="number" placeholder="Phone" name="phone"/>
                </div>
                <div class="form-group">
                    <input id="text" class="form-control" type="text" placeholder="Address" name="address"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-6">
                        <input id="password" class="form-control" type="password" placeholder="Password"
                               name="password"/>
                        @if ($errors->has('password'))
                            <span class="text-danger">{{ $errors->first('password') }}</span>
                        @endif
                    </div>
                    <div class="form-group col-6">
                        <input id="password_confirmation" class="form-control" type="password"
                               placeholder="Confirm Password" name="password_confirmation"/>
                        @if ($errors->has('password_confirmation'))
                            <span class="text-danger">{{ $errors->first('password_confirmation') }}</span>
                        @endif
                    </div>
                </div>
                <div class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="basic-register-checkbox"/>
                    <label class="custom-control-label" for="basic-register-checkbox">I accept the
                        <a href="#!">terms </a>
                        and <a href="#!">privacy policy</a>
                    </label>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block mt-3" type="submit" name="submit">
                        Register
                    </button>
                </div>
            </form>
            <div class="w-100 position-relative mt-4">
                <hr class="text-300"/>
                <div
                    class="position-absolute absolute-centered t-0 px-3 bg-white text-sans-serif fs--1 text-500 text-nowrap">
                    or register with
                </div>
            </div>
            <div class="form-group mb-0">
                <div class="row no-gutters">
                    <div class="col-sm-6 pr-sm-1">
                        <a class="btn btn-outline-google-plus btn-sm btn-block mt-2" href="#">
                            <span class="fab fa-google-plus-g mr-2" data-fa-transform="grow-8"></span>
                            google</a>
                    </div>
                    <div class="col-sm-6 pl-sm-1">
                        <a class="btn btn-outline-facebook btn-sm btn-block mt-2" href="#">
                            <span class="fab fa-facebook-square mr-2" data-fa-transform="grow-8"></span>
                            facebook</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
