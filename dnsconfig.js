var REG_NONE = NewRegistrar("none");
var DSP_SAKURACLOUD = NewDnsProvider("sakuracloud");

D("dnsbeer.com", REG_NONE, DnsProvider(DSP_SAKURACLOUD),
  DefaultTTL(3600),
  A("pale-ale", "192.0.2.1"),
  A("pilsner", "192.0.2.2"),
END);
