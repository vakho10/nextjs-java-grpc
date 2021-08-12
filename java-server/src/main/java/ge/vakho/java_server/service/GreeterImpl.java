package ge.vakho.java_server.service;

import ge.vakho.grpc.helloworld.GreeterGrpc;
import ge.vakho.grpc.helloworld.HelloReply;
import ge.vakho.grpc.helloworld.HelloRequest;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class GreeterImpl extends GreeterGrpc.GreeterImplBase {

    private static final Logger log = LoggerFactory.getLogger(GreeterImpl.class);

    @Override
    public void sayHello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {
        log.info("Called sayHello() with request: {}", req.getName());
        HelloReply reply = HelloReply.newBuilder().setMessage("Hello " + req.getName()).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}