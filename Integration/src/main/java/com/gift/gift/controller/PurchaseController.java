package com.gift.gift.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gift.gift.model.PurchaseModel;
import com.gift.gift.service.PurchaseService;

@CrossOrigin
@RestController
public class PurchaseController {
    @Autowired
    PurchaseService purchaseService;

    @GetMapping("/getpd")
    public List<PurchaseModel> fetchDetails() {
        return purchaseService.getDetails();
    }

    @PostMapping("/addpd")
    public String addId(@RequestBody PurchaseModel purchase) {
        purchaseService.add(purchase);
        return "Added " + purchase.getpurchaseId();
    }

    @PutMapping("/updatepd")
    public PurchaseModel updateInfo(@RequestBody PurchaseModel purchase) {
        return purchaseService.updateDetails(purchase);
    }

    @DeleteMapping("/deletepd/{purchaseId}")
    public String deleteInfo(@PathVariable("purchaseId") int purchaseId) {
        purchaseService.deleteDetails(purchaseId);
        return "Details deleted successfully";
    }
}
