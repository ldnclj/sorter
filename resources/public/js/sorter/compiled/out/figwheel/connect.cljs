(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [sorter.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/sorter.core.reload-hook (apply js/sorter.core.reload-hook x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'sorter.core/reload-hook' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

