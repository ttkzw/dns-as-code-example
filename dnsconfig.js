var REG_NONE = NewRegistrar("none");
var DSP_SAKURACLOUD = NewDnsProvider("sakuracloud");

D("dnsbeer.com", REG_NONE, DnsProvider(DSP_SAKURACLOUD),
  DefaultTTL(3600),
  HTTPS("@", 1, "pale-ale.dnsbeer.com", ""),
  A("pale-ale", "192.0.2.1"),
END);
