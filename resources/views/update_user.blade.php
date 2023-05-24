@extends('layouts.main')

@section('content')

    <div class="card">
        <div class="card-body p-4">
            <div class="row text-left justify-content-between align-item s-center mb-2">
                <div class="col-auto my-3">
                    <h4> Update user </h4>
                </div>
            </div>
            <form method="POST" action="{{ route('update.user', ['id'=> $user->id ]) }}">
                {{method_field('PUT')}}
                @csrf
                <div class="form-group">
                    <input class="form-control" id="first_name" value="{{ $user->first_name }}" name="first_name" type="text"
                           placeholder="Fist Name">
                </div>
                    <div class="form-group">
                        <input class="form-control" id="last-name" value="{{ $user->last_name }}" name="last_name"
                               type="text" placeholder="Last Name">
                    </div>
                <div class="form-group">
                    <input class="form-control" id="email" value="{{ $user->email }}" name="email" type="email"
                           placeholder="Email">
                    @if ($errors->has('email'))
                        <span class="text-danger">{{ $errors->first('email') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <input class="form-control" id="number" value="{{ $user->phone }}" name="phone" type="number"
                           placeholder="Phone">
                </div>
                <div class="form-group">
                    <input class="form-control" id="text" value="{{ $user->address }}" name="address" type="text"
                           placeholder="Address">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary mt-3" type="submit" name="submit">Save</button>
                </div>
            </form>
@endsection
