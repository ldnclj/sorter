(ns sorter.core
  (:require [petrol.core :as petrol]
            [reagent.core :as reagent]
            [sorter.processing]
            [sorter.view :as view]))

(def initial-state
  {:singulation ["KH1001" "KH1002"]
   :direct_lane []})

(defonce !app
  (reagent/atom initial-state))

;; figwheel reload-hook
(defn reload-hook
  []
  (swap! !app identity))

(defn render-fn
  [ui-channel app]
  (reagent/render-component [view/root ui-channel app]
                            js/document.body))

(defn ^:export main
  []
  (enable-console-print!)
  (petrol/start-message-loop! !app render-fn))
