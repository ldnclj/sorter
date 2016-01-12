(ns sorter.view
  (:require [petrol.core :refer [send! send-value!]]
            [sorter.messages :as m]))

(defn root
  [ui-channel app]
  [:div.container
   [:div.row
    [:div.col-xs-12.col-sm-6.col-lg-4
     [:h1 "Sorter"]
     [:div.row (str app)]
     [:div
      [:input {:type :text
               :placeholder "Hook ID"
               :on-change (send-value! ui-channel m/->SearchHookID)}]
      [:button {:on-click (send! ui-channel (m/->DirectLane (app :hook-id)))} "Submit"]]]]])
