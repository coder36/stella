When(/^I click on 'manage your account'$/) do
  click_on 'manage your account'
end

Then(/^I should see my current bill$/) do

end

Given(/^I am viewing the homepage$/) do
  visit '/index.html'
end


And(/^I wait$/) do
  sleep 10000
end