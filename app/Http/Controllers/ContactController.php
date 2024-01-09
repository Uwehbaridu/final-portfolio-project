<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Validate the request...
        $validated = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'message' => 'required',
        ]);

        // Process the data...
        // For example, sending an email
        Mail::send(/* ... */);

        // Redirect with a success message
        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }
}

