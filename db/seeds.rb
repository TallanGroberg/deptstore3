# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
15.times do
  d = Department.create(
    name: Faker::Commerce.department,
  )



  10.times do
    i = Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.paragraph_by_chars(256, false),
      price: Faker::Commerce.price(range = 0..1000.00, as_string = false),
      department_id: d.id
    )
  end
end

puts "seeded items"
