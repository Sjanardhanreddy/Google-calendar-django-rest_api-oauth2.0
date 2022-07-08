def CallbackView(request):
    try:
        # Get user credentials
        credentials = google_apis_oauth.get_crendentials_from_callback(
            request,
            JSON_FILEPATH,
            SCOPES,
            REDIRECT_URI
        )

        # Stringify credentials for storing them in the DB
        stringified_token = google_apis_oauth.stringify_credentials(
            credentials)

        # Store the credentials safely in the DB
        ...

        # Now that you have stored the user credentials you
        # can redirect user to your main application.
        ...
    except exceptions.InvalidLoginException:
        # This exception is raised when there is an inavlid
        # request to this callback uri.