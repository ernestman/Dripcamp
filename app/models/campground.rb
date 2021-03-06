# == Schema Information
#
# Table name: campgrounds
#
#  id            :bigint           not null, primary key
#  host_id       :integer          not null
#  name          :string           not null
#  location      :string           not null
#  price         :float            not null
#  latitude      :float            not null
#  longitude     :float            not null
#  min_nights    :integer          not null
#  max_guests    :integer          not null
#  num_sites     :integer          not null
#  cabin         :boolean          default(FALSE), not null
#  parking       :boolean          default(FALSE), not null
#  campfires     :boolean          default(FALSE), not null
#  toilets       :boolean          default(FALSE), not null
#  pets          :boolean          default(FALSE), not null
#  wifi          :boolean          default(FALSE), not null
#  bins          :boolean          default(FALSE), not null
#  potable_water :boolean          default(FALSE), not null
#  showers       :boolean          default(FALSE), not null
#  picnic_table  :boolean          default(FALSE), not null
#  kitchen       :boolean          default(TRUE), not null
#  activities    :string           default([]), is an Array
#  checkin_time  :string           not null
#  checkout_time :string           not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  rating        :integer
#

class Campground < ApplicationRecord

    validates :host_id, :name, :location, :price, :latitude, :longitude,
        :min_nights, :max_guests, :num_sites, :activities, :checkin_time, 
        :checkout_time, :description, presence: true
        
    validates :cabin, inclusion: { in: [true, false] }
    validates :parking, inclusion: { in: [true, false] }
    validates :campfires, inclusion: { in: [true, false] }
    validates :toilets, inclusion: { in: [true, false] }
    validates :pets, inclusion: { in: [true, false] }
    validates :wifi, inclusion: { in: [true, false] }
    validates :bins, inclusion: { in: [true, false] }
    validates :potable_water, inclusion: { in: [true, false] }
    validates :showers, inclusion: { in: [true, false] }
    validates :picnic_table, inclusion: { in: [true, false] }
    validates :kitchen, inclusion: { in: [true, false] }

    has_many_attached :photos

    belongs_to :host,
        foreign_key: :host_id,
        class_name: "User"

    has_many :bookings, 
        foreign_key: :campground_id,
        class_name: "Booking"

    has_many :reviews,
        foreign_key: :campground_id,
        class_name: "Review"
    
    def in_bounds(bounds)
        # bounds = {
        #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
        #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
        # }

        # lat = horizontal, lng = vertical

        top = bounds["northEast"]["lat"].to_f
        right = bounds["northEast"]["lng"].to_f
        bottom = bounds["southWest"]["lat"].to_f
        left = bounds["southWest"]["lng"].to_f
        
        if (self.latitude < top && self.latitude > bottom) && (self.longitude > left && self.longitude < right)
            return true
        end

        return false
    end


end
