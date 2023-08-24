import React from 'react';
import './Indirect.css';
import indirectImage from '../assests/Indirect.png'; // Adjust the path as necessary

const Indirect = () => {
    return (
        <div className="indirect-card">
            <img className="indirect-image" src={indirectImage} alt="Indirect Taxation" />
            <div className="indirect-content">
                <h2 className="indirect-title">Indirect Taxation (Goods & Service Tax) – Scope of Services</h2>
               

                {/* Section A */}
                <section>
                    <h3>A. Registration under GST Act</h3>
                    <ul>
                        <li><strong>Threshold limit for GST Registration:</strong></li>
                        <ul>
                            <li>For Services: 20 Lakhs per year / 10 Lakhs for Special Category States</li>
                            <li>For Goods: 40 Lakhs per year / 20 Lakhs for Special Category States</li>
                        </ul>
                        <li><strong>Registration:</strong></li>
                        <ul>
                            <li>Normal Registration</li>
                            <li>Temporary Registration for Casual Taxable Person / Non-Resident Indian</li>
                            <li>Others (SEZ, EOU etc)</li>
                        </ul>
                        <li><strong>Support:</strong> Support in filing application along with supporting documents for registration, cancellation of registration, and amendment of registration.</li>
                    </ul>
                </section>

                {/* Section B */}
                <section>
                <h3><strong>B. Compliance</strong></h3>
<ol>
    <li>
        <strong>Form GSTR 1 / Invoice Furnishing Facility (IFF)</strong>
        <ul>
            <li><strong>Detailed reporting</strong> in relation to various <strong>Outward Supply (Sale Transactions)</strong></li>
            <li><strong>To be filed</strong> on a monthly (Due Date – 11th of next month) / quarterly basis (Due Date 13th of the next month)</li>
            <li>In case of <strong>Quarterly GSTR 1</strong>, IFF is to be filed on a monthly basis</li>
        </ul>
    </li>
    <li>
        <strong>Form GSTR 3B</strong>
        <ul>
            <li><strong>Form GSTR-3B</strong> is a simplified summary return for declaring <strong>summary GST liabilities / Input Tax Credit</strong> for a particular tax period and pay off liabilities</li>
            <li><strong>To be filed</strong> on a monthly / quarterly basis</li>
            <li>For monthly filers, due date for filing of <strong>Form GSTR-3B</strong> is 20th day of the month following the month (tax period) for which the return pertains</li>
        </ul>
    </li>
    <li><strong>Form GSTR 9 / 9A</strong> - Form GSTR-9 / 9A is an annual return to be filed once for each financial year, by the registered taxpayers and Composition Dealer respectively</li>
    <li><strong>Form GSTR 9C</strong> - GSTR 9C is a Reconciliation Statement to be filed every year by a registered person having aggregate turnover exceeding 5 Crores</li>
    <li>
        <strong>Other Forms</strong>
        <ul>
            <li>
                <strong>Regular Compliance Forms</strong>
                <ul>
                    <li><strong>GSTR 4</strong> – Return for Composition Dealer</li>
                    <li><strong>GSTR 5</strong> – Return for Non Resident Taxable Person</li>
                    <li><strong>GSTR 6</strong> – Return for Input Service Distributor</li>
                    <li><strong>GSTR 7 / 7A</strong> – Return for Tax Deducted at Source</li>
                    <li><strong>GSTR 8 / 8A</strong> – Statement for Tax Collection at Source</li>
                    <li><strong>GSTR 10</strong> – Final Return after cancellation of registration</li>
                </ul>
            </li>
            <li>
                <strong>Miscellaneous Forms</strong>
                <ul>
                    <li><strong>GST ITC 01</strong> - Declaration for claim of Input Tax Credit for stock lying as on date of registration</li>
                    <li><strong>GST ITC 02</strong> - Declaration for transfer of ITC in case of sale, merger, demerger, amalgamation, lease or transfer of a business</li>
                    <li><strong>GST ITC 03</strong> - Declaration for intimation of ITC reversal/payment of tax on inputs held in stock, inputs contained in semi-finished and finished goods held in stock and capital goods in case of conversion of registration to composition or the supply becomes exempt</li>
                    <li><strong>GST ITC 04</strong> - Details of goods/capital goods sent to job worker and received back</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>
</section>

                <section>
    <h3>C. Refund</h3>
    <ul>
        <li><strong>Refund of unutilized Input Tax Credit</strong>
            <ul>
                <li><strong>Rate of tax on inward supply</strong> is higher than <strong>rate of tax on the outward supply</strong> (<strong>Inverted rated supplies</strong>)</li>
                <li><strong>Exports of goods or services / Supplies to SEZ unit</strong> or both without payment of <strong>IGST</strong></li>
            </ul>
        </li>
        <li><strong>Refund of any balance in the electronic cash ledger</strong></li>
        <li><strong>Tax paid on deemed export Deemed Exports</strong>. Deemed Exports include:
            <ul>
                <li>Supply of goods by a registered person against <strong>Advance Authorisation</strong></li>
                <li>Supply of capital goods by a registered person against <strong>Export Promotion Capital Goods Authorisation</strong></li>
                <li>Supply of goods by a registered person to <strong>Export Oriented Unit</strong></li>
                <li>Supply of gold by a bank or <strong>Public Sector Undertaking</strong> specified in the notification No. 50/2017-Customs, dated the 30th June, 2017 (as amended) against <strong>Advance Authorisation</strong></li>
            </ul>
        </li>
        <li><strong>Excess payment of tax</strong></li>
        <li><strong>Advance tax paid by a Casual Taxable Person or Non Resident Taxable Person under Section 27(2)</strong>. However, the amount shall not be refunded unless such person has furnished all the returns required under Section 39, i.e., filed during the period of registration</li>
        <li><strong>Other Cases:</strong>
            <ul>
                <li><strong>Finalisation of provisional assessment</strong></li>
                <li><strong>Favourable order of an appellate authority</strong>, in favor of any taxpayer</li>
                <li>Finalization of investigation procedures - <strong>No/Less tax liability arising thereof</strong></li>
                <li><strong>CGST and SGST/ UTGST</strong> paid on intra-state supply but held as inter-state supply</li>
            </ul>
        </li>
    </ul>
</section>



<section>
    <h3>D. Litigation Support</h3>
    <ul>
        <li><strong>Support in GST Department Audit</strong> under <strong>Section 65</strong> of <strong>Central Goods and Service Tax Act, 2017</strong> (hereinafter referred to as <strong>CGST Act</strong>)</li>
        <li><strong>Support in Inspection, Search & Seizure</strong> under <strong>Section 67</strong> of <strong>CGST Act</strong></li>
        <li><strong>Support in inquiry by proper officer</strong> under <strong>Section 70</strong> of <strong>CGST Act</strong></li>
        <li><strong>Support in filing submissions / applications / payments / release of goods</strong> for goods detained while in transit by the roving squad under <strong>Section 129</strong> of <strong>CGST Act</strong></li>
        <li><strong>Support in filing appeal to Appellate Authority</strong> under <strong>Section 107</strong> of <strong>CGST Act</strong></li>
    </ul>
</section>

<section>
    <h3>E. Advisory Services</h3>
    <ul>
        <li><strong>Advisory Support Services</strong> for various business transactions, <strong>business restructuring</strong> etc.</li>
        <li><strong>Health checkup</strong> / review of the positions taken / procedures followed / <strong>timely compliances</strong> under <strong>GST</strong></li>
    </ul>
</section>

<section>
    <h3>F. Other Services</h3>
    <ul>
        <li><strong>E-Invoice</strong> – generation of <strong>IRN</strong> and <strong>QR Code</strong> through NIC for registered person with turnover more than 10 crores in any of the previous financial year (the threshold limit is subject to change)</li>
        <li><strong>E-way Bill</strong> – generation of Eway Bill for movement of goods for various types of supplies (<strong>intra-state</strong> as well as <strong>inter-state</strong>)</li>
    </ul>
</section>


            </div>
        </div>
    );
}

export default Indirect;
