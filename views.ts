import os
import google_apis_oauth

from django.shortcuts import HttpResponseRedirect

# The url where the google oauth should redirect
# after a successful login.
REDIRECT_URI = 'https://localhost:3000/google_oauth/callback/'

# Authorization scopes required
SCOPES = ['https://www.googleapis.com/auth/calendar']

# Path of the "client_id.json" file
JSON_FILEPATH = os.path.join(os.getcwd(), 'client_secret.json')

def RedirectOauthView(request):
    oauth_url = google_apis_oauth.get_authorization_url(
        JSON_FILEPATH, SCOPES, REDIRECT_URI)
    return HttpResponseRedirect(oauth_url)

