# Enable and set development related modules and permissions.
drush en -y stage_file_proxy
drush en -y devel
drush rap 'authenticated user' 'access devel information'

# Create Researcher and Contributor test users.
drush ucrt contributor --mail=contributor@email.local --password=contributor123#$
drush urol Contributor contributor
drush ucrt researcher --mail=researcher@email.local --password=researcher123#$
drush urol Researcher researcher

# Drupal local environment variables.
echo "$conf['stage_file_proxy_origin'] = 'http://example.com'" >> /var/www/html/cnf/settings.local.php
