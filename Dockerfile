FROM alpine:latest

RUN apk -U --no-cache upgrade && \
	apk add --no-cache bash ca-certificates curl libc6-compat

ADD dnscontrol /usr/local/bin/dnscontrol

ENTRYPOINT [ "/usr/local/bin/dnscontrol" ]
