@extends('layouts.blank')
@section('content')

    <div class="card">
        <div class="card-body p-4 p-sm-5">
            <div class="row text-left justify-content-between align-items-center mb-2">
                <div class="col-auto">
                    <h5>Log in</h5>
                </div>
                <div class="col-auto">
                    <p class="fs--1 text-600 mb-0">or
                        <a href="{{ route('auth.register') }}">Create an account</a>
                    </p>
                </div>
            </div>
            <form method="POST" action="{{ route('login.custom') }}">
                <div class="form-group">
                    @csrf
                    <input id="email" class="form-control" name="email" value="{{ old('email') }}" type="text"
                           placeholder="Email address"/>
                    @if ($errors->has('email'))
                        <span class="text-danger">{{ $errors->first('email') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <input id="email" class="form-control" type="password" placeholder="Password" name="password"/>
                    @if ($errors->has('password'))
                        <span class="text-danger">{{ $errors->first('password') }}</span>
                    @endif
                </div>
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="basic-checkbox" checked="checked"/>
                            <label class="custom-control-label" for="basic-checkbox">Remember me</label>
                        </div>
                    </div>
                    <div class="col-auto">
                        <a class="fs--1" href="#">Forgot Password?</a>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block mt-3" type="submit" name="submit">Log in</button>
                </div>
            </form>
            <div class="w-100 position-relative mt-4">
                <hr class="text-300"/>
                <div
                    class="position-absolute absolute-centered t-0 px-3 bg-white text-sans-serif fs--1 text-500 text-nowrap">
                    or log in with
                </div>
            </div>
            <div class="form-group mb-0">
                <div class="row no-gutters">
                    <div class="col-sm-6 pr-sm-1">
                        <a class="btn btn-outline-google-plus btn-sm btn-block mt-2" href="#">
                            <span class="fab fa-google-plus-g mr-2" data-fa-transform="grow-8"></span> google
                        </a>
                    </div>
                    <div class="col-sm-6 pl-sm-1">
                        <a class="btn btn-outline-facebook btn-sm btn-block mt-2" href="#">
                            <span class="fab fa-facebook-square mr-2" data-fa-transform="grow-8"></span>facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

