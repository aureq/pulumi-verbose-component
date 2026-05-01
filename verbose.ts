import * as pulumi from "@pulumi/pulumi";

interface VerboseComponentArgs {
    /**
     * prefix used in the name of the resources
     */
    prefixName: string,
}

export class VerboseComponent extends pulumi.ComponentResource {
    private readonly name: string;
    private readonly args: VerboseComponentArgs;

    /**
     * This is the class constructor. This method class all other private methods to correctly construct
     * the resources to connect to our AWS Account.
     *
     * @param name The base name for the resources created by this class
     * @param args The resource properties
     * @param opts Additional Pulumi CustomResourceOptions
     */
    constructor(name: string, args: VerboseComponentArgs, opts?: pulumi.ComponentResourceOptions) {
        super("custom:resource:verbose-component", name, args, opts);
        this.name = name;
        this.args = args;

        const currentOrg: string = pulumi.getOrganization();
        const currentProject: string = pulumi.getProject();

        switch ( pulumi.getStack() ) {
            case "dev":
                pulumi.log.info(`🔥 This is a '${currentOrg}/${currentProject}/dev', thank you for making our product better 🌿.`);
                break;
            case "staging":
                pulumi.log.info(`🔥 A '${currentOrg}/${currentProject}/staging' stack, almost ready to ship 🎉.`);
                break;
            case "prod":
                pulumi.log.info(`🔥 This is a '${currentOrg}/${currentProject}/prod', let's be extra careful please 🙏.`);
                break;
            default:
                pulumi.log.warn(`⚠️  Unknown stack "${pulumi.getStack()}", no specific settings applied. You're currently working in '${currentOrg}/${currentProject}/${pulumi.getStack()}'..`);
        }
    }
}