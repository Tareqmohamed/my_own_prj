#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

kubectl apply -f "$SCRIPT_DIR/ns.yml"
kubectl apply -f "$SCRIPT_DIR/cf.yml"
kubectl apply -f "$SCRIPT_DIR/dep.yml"
kubectl apply -f "$SCRIPT_DIR/serv.yml"
