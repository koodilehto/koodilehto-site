# Koodilehto site

If you want to run this site locally, make sure you have Ruby and jekyll installed ("gem install jekyll"). To actually run it, use "run_server.sh". Navigate to http://localhost:4000/ and you should be able to see something.

On Ubuntu 11.10 systems you might encounter an error message when running the 
server:

Invalid gemspec in [/var/lib/gems/1.8/specifications/directory_watcher-1.4.1.gemspec]: invalid date format in specification: "2011-08-30 00:00:00.000000000Z"

You need to change the date line in /var/lib/gems/1.8/specifications/directory_watcher-1.4.1.gemspec from "s.date = %q{2011-08-30 00:00:00.000000000Z}" to "s.date = %q{2011-08-30}". 

