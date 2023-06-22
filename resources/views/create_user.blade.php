@extends('layouts.main')

@section('content')

    <div class="card">
        <div class="card-body p-4">
            <div class="row text-left justify-content-between align-item s-center mb-2">
                <div class="col-auto my-3">
                    <h4> Create user </h4>
                </div>
            </div>
            <form method="POST" action="{{ route('create.custom')}}">
                @csrf
                <div class="form-group">
                    <input class="form-control" id="name" name="first_name" type="text" placeholder="First name">
                </div>
                <div class="form-group">
                    <input class="form-control" id="name" name="last_name" type="text" placeholder="Last name">
                </div>
                <div class="form-group">
                    <input class="form-control" id="email" name="email" type="email" placeholder="Email">
                    @if ($errors->has('email'))
                        <span class="text-danger">{{ $errors->first('email') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <input class="form-control" id="password" type="password" name="password"
                           placeholder="Password">
                    @if ($errors->has('password'))
                        <span class="text-danger">{{ $errors->first('password') }}</span>
                    @endif
                </div>
                <div class="form-group ">
                    <input id="password_confirmation" class="form-control" type="password"
                           placeholder="Confirm Password" name="password_confirmation"/>
                    @if ($errors->has('password_confirmation'))
                        <span class="text-danger">{{ $errors->first('password_confirmation') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <input class="form-control" id="number" name="phone" type="number" placeholder="Phone">
                </div>
                <div class="form-group">
                    <input class="form-control" id="text" name="address" type="text" placeholder="Address">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="role_id">
                        @foreach($roles as $row)
                            <option value="{{ $row->id }}">{{$row->name}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary mt-3" type="submit" name="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
@endsection
