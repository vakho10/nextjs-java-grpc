package ge.vakho.grpc_server.service;

import ge.vakho.grpc.helloworld.GreeterGrpc;
import ge.vakho.grpc.helloworld.HelloReply;
import ge.vakho.grpc.helloworld.HelloRequest;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.server.service.GrpcService;

@Slf4j
@GrpcService
public class HelloService extends GreeterGrpc.GreeterImplBase {

    @Override
    public void sayHello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {
        log.info("Called sayHello() with request: {}", req.getName());
        if (req.getName().equalsIgnoreCase("tom")) {
            throw new IllegalArgumentException("You mustn't pass the name Tom!");
        }
        HelloReply reply = HelloReply.newBuilder().setMessage("Hello " + req.getName()).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}