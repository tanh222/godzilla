@extends('layouts.main')

@section('title', 'Dashboard')

@section('content')

    <div class="row">
        <div class="col-12">
            <div class="card mb-3 btn-reveal-trigger">
                <div class="card-header position-relative min-vh-25 mb-8">
                    <div class="cover-image">
                        <div class="bg-holder rounded-soft rounded-bottom-0"
                             style="background-image:url({{ asset('img/generic/4.jpg') }});">
                        </div>
                        <input class="d-none" id="upload-cover-image" type="file">
                        <label class="cover-image-file-input" for="upload-cover-image">
                            <span class="fas fa-camera mr-2"></span>
                            <span>Change cover photo</span>
                        </label>
                    </div>
                    <div class="avatar avatar-5xl avatar-profile shadow-sm img-thumbnail rounded-circle">
                        <div class="h-100 w-100 rounded-circle overflow-hidden position-relative">
                            <img src="{{ asset ('img/team/2-thumb.png') }}" width="200" alt=""
                                 data-dz-thumbnail>
                            <input class="d-none" id="profile-image" type="file">
                            <label class="mb-0 overlay-icon d-flex flex-center" for="profile-image">
                                <span class="bg-holder overlay overlay-0"></span>
                                <span class="z-index-1 text-white text-center fs--1">
                                            <span class="fas fa-camera"></span>
                                            <span class="d-block">Update</span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body p-4">
            <div class="row text-left justify-content-between align-item s-center mb-2">
                <div class="col-auto my-3r">
                    <h5 class="mb-0">Cài đặt</h5>
                </div>
                <div class="card-body bg-light">
                    <form method="POST" action="{{ route('setting.user',['id'=> $user->id ])}}">
                        {{method_field('PUT')}}
                        @csrf
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="first-name">First Name</label>
                                    <input class="form-control" id="first-name" type="text" value="Anthony"
                                           name="first-name" placeholder="first name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="last-name">Last Name</label>
                                    <input class="form-control" id="last-name" type="text" value="{{ $user->name }}"
                                           name="last-name" placeholder="last name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="email1">Email</label>
                                    <input class="form-control" id="email1" type="text"
                                           value="{{ $user->email }}" name="email" placeholder="email">
                                    @if ($errors->has('email'))
                                        <span class="text-danger">{{ $errors->first('email') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input class="form-control" id="phone" type="text"
                                           value="{{ $user->phone }}" name="phone"
                                           placeholder="phone">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <label for="phone">Address</label>
                                <input class="form-control" id="text" name="address"
                                       value="{{ $user->address }}" type="text"
                                       placeholder="Address">
                            </div>
                            <div class="col-12 d-flex justify-content-end">
                                <button class="btn btn-primary mt-4" type="submit">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
