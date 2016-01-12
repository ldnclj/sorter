(ns sorter.processing
  (:require [petrol.core :refer [Message]]
            [sorter.messages :as m]))

(extend-protocol Message
  m/DirectLane
  (process-message [msg app]
    (assoc app :direct_lane (conj (:direct_lane app) (:hooks msg))))

  m/SearchHookID
  (process-message [msg app]
    #_(js/console.log [msg app])
    (assoc app :hook-id (:hook-id msg))))
