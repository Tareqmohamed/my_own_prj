#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

kubectl apply -f "$SCRIPT_DIR/ns.yml"
kubectl apply -f "$SCRIPT_DIR/cf.yml"
kubectl apply -f "$SCRIPT_DIR/dep.yml"
kubectl apply -f "$SCRIPT_DIR/serv.yml"

kubectl get all -n self-app-ns
echo "-----------------------------------------------------------------------------"
MINIKUBE_IP=$(minikube ip)
echo "Minikube IP: $MINIKUBE_IP"


SERVICE_NAME="self-app-svc" 
NAMESPACE="self-app-ns"        
SERVICE_PORT=$(kubectl get svc "$SERVICE_NAME" -n "$NAMESPACE" -o=jsonpath='{.spec.ports[0].nodePort}')
echo "Service '$SERVICE_NAME' is exposed on port: $SERVICE_PORT"

echo "Access the service at: http://$MINIKUBE_IP:$SERVICE_PORT"